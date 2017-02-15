/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var ChapterModel = (function () {
    function ChapterModel(chapterModel) {
        this._chapterModel = chapterModel;
    }
    Object.defineProperty(ChapterModel.prototype, "id", {
        get: function () {
            return this._chapterModel.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChapterModel.prototype, "status", {
        get: function () {
            return this._chapterModel.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChapterModel.prototype, "startDate", {
        get: function () {
            return this._chapterModel.start_date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChapterModel.prototype, "endDate", {
        get: function () {
            return this._chapterModel.end_date;
        },
        enumerable: true,
        configurable: true
    });
    return ChapterModel;
}());
Object.seal(ChapterModel);
module.exports = ChapterModel;
//# sourceMappingURL=ChapterModel.js.map