import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
    readonly DT_FORMAT = 'DD/MM/YYYY';

    parse(value: string): NgbDateStruct {
        if (value) {
            value = value.trim();
            console.log(value);
            let mdt = moment(value, this.DT_FORMAT);
            console.log("mdt.day() " + mdt.date() + "mdt.month()" + (mdt.month() + 1) + "mdt.year()" + mdt.year());
            return {day: mdt.date() , month: mdt.month() + 1 , year: mdt.year() };
        }
        return null;
        
    }
    format(date: NgbDateStruct): string {
        if (!date) return '';
        let mdt = moment([date.year, date.month - 1, date.day]);
        if (!mdt.isValid()) return '';
        return mdt.format(this.DT_FORMAT);
    }
}