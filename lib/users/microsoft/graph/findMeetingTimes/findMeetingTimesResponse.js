"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.findMeetingTimesResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _attendees ?  : AttendeeBase[] | undefined;
    _isOrganizerOptional ?  : boolean | undefined;
    _locationConstraint ?  : LocationConstraint | undefined;
    _maxCandidates ?  : number | undefined;
    _meetingDuration ?  : string | undefined;
    _minimumAttendeePercentage ?  : number | undefined;
    _returnSuggestionReasons ?  : boolean | undefined;
    _timeConstraint ?  : TimeConstraint | undefined;
    constructor();
    {
        this._additionalData = new Map();
    }
    ;
    get;
    additionalData();
    {
        return this._additionalData;
    }
    ;
    get;
    attendees();
    {
        return this._attendees;
    }
    ;
    get;
    isOrganizerOptional();
    {
        return this._isOrganizerOptional;
    }
    ;
    get;
    locationConstraint();
    {
        return this._locationConstraint;
    }
    ;
    get;
    maxCandidates();
    {
        return this._maxCandidates;
    }
    ;
    get;
    meetingDuration();
    {
        return this._meetingDuration;
    }
    ;
    get;
    minimumAttendeePercentage();
    {
        return this._minimumAttendeePercentage;
    }
    ;
    get;
    returnSuggestionReasons();
    {
        return this._returnSuggestionReasons;
    }
    ;
    get;
    timeConstraint();
    {
        return this._timeConstraint;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["attendees", function (o, n) { o.attendees = n.getCollectionOfPrimitiveValues(); }],
            ["isOrganizerOptional", function (o, n) { o.isOrganizerOptional = n.getBooleanValue(); }],
            ["locationConstraint", function (o, n) { o.locationConstraint = n.getObjectValue(LocationConstraint); }],
            ["maxCandidates", function (o, n) { o.maxCandidates = n.getNumberValue(); }],
            ["meetingDuration", function (o, n) { o.meetingDuration = n.getStringValue(); }],
            ["minimumAttendeePercentage", function (o, n) { o.minimumAttendeePercentage = n.getNumberValue(); }],
            ["returnSuggestionReasons", function (o, n) { o.returnSuggestionReasons = n.getBooleanValue(); }],
            ["timeConstraint", function (o, n) { o.timeConstraint = n.getObjectValue(TimeConstraint); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("attendees", this.attendees),
        writer: writer,
        : .writeBooleanValue("isOrganizerOptional", this.isOrganizerOptional),
        writer: writer,
        : .writeObjectValue("locationConstraint", this.locationConstraint),
        writer: writer,
        : .writeNumberValue("maxCandidates", this.maxCandidates),
        writer: writer,
        : .writeStringValue("meetingDuration", this.meetingDuration),
        writer: writer,
        : .writeNumberValue("minimumAttendeePercentage", this.minimumAttendeePercentage),
        writer: writer,
        : .writeBooleanValue("returnSuggestionReasons", this.returnSuggestionReasons),
        writer: writer,
        : .writeObjectValue("timeConstraint", this.timeConstraint),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    attendees(value, AttendeeBase[] | undefined);
    {
        this._attendees = value;
    }
    ;
    set;
    isOrganizerOptional(value, boolean | undefined);
    {
        this._isOrganizerOptional = value;
    }
    ;
    set;
    locationConstraint(value, LocationConstraint | undefined);
    {
        this._locationConstraint = value;
    }
    ;
    set;
    maxCandidates(value, number | undefined);
    {
        this._maxCandidates = value;
    }
    ;
    set;
    meetingDuration(value, string | undefined);
    {
        this._meetingDuration = value;
    }
    ;
    set;
    minimumAttendeePercentage(value, number | undefined);
    {
        this._minimumAttendeePercentage = value;
    }
    ;
    set;
    returnSuggestionReasons(value, boolean | undefined);
    {
        this._returnSuggestionReasons = value;
    }
    ;
    set;
    timeConstraint(value, TimeConstraint | undefined);
    {
        this._timeConstraint = value;
    }
    ;
}
