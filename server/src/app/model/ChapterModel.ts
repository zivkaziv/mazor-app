/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IChapterModel = require('./interfaces/ChapterModel');

class ChapterModel {

    private _chapterModel: IChapterModel;

    constructor(chapterModel: IChapterModel) {
        this._chapterModel = chapterModel;
    }
    get id (): string {
        return this._chapterModel.id;
    }

    get status (): string {
        return this._chapterModel.status;
    }

    get startDate (): Date {
        return this._chapterModel.start_date;
    }

    get endDate (): Date {
        return this._chapterModel.end_date;
    }
}
Object.seal(ChapterModel);
export =  ChapterModel;