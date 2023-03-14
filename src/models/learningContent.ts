import {Entity} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LearningContent extends Entity implements Parsable {
    /** Keywords, topics, and other tags associated with the learning content. Optional. */
    private _additionalTags?: string[] | undefined;
    /** The content web URL for the learning content. Required. */
    private _contentWebUrl?: string | undefined;
    /** The authors, creators, or contributors of the learning content. Optional. */
    private _contributors?: string[] | undefined;
    /** The date and time when the learning content was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional. */
    private _createdDateTime?: Date | undefined;
    /** The description or summary for the learning content. Optional. */
    private _description?: string | undefined;
    /** The duration of the learning content in seconds. The value is represented in ISO 8601 format for durations. Optional. */
    private _duration?: Duration | undefined;
    /** Unique external content ID for the learning content. Required. */
    private _externalId?: string | undefined;
    /** The format of the learning content. For example, Course, Video, Book, Book Summary, Audiobook Summary. Optional. */
    private _format?: string | undefined;
    /** Indicates whether the content is active or not. Inactive content doesn't show up in the UI. The default value is true. Optional. */
    private _isActive?: boolean | undefined;
    /** Indicates whether the learning content requires the user to sign-in on the learning provider platform or not. The default value is false. Optional. */
    private _isPremium?: boolean | undefined;
    /** Indicates whether the learning content is searchable or not. The default value is true. Optional. */
    private _isSearchable?: boolean | undefined;
    /** The language of the learning content, for example, en-us or fr-fr. Required. */
    private _languageTag?: string | undefined;
    /** The date and time when the learning content was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The number of pages of the learning content, for example, 9. Optional. */
    private _numberOfPages?: number | undefined;
    /** The skills tags associated with the learning content. Optional. */
    private _skillTags?: string[] | undefined;
    /** The source name of the learning content, such as LinkedIn Learning or Coursera. Optional. */
    private _sourceName?: string | undefined;
    /** The URL of learning content thumbnail image. Optional. */
    private _thumbnailWebUrl?: string | undefined;
    /** The title of the learning content. Required. */
    private _title?: string | undefined;
    /**
     * Gets the additionalTags property value. Keywords, topics, and other tags associated with the learning content. Optional.
     * @returns a string
     */
    public get additionalTags() {
        return this._additionalTags;
    };
    /**
     * Sets the additionalTags property value. Keywords, topics, and other tags associated with the learning content. Optional.
     * @param value Value to set for the additionalTags property.
     */
    public set additionalTags(value: string[] | undefined) {
        this._additionalTags = value;
    };
    /**
     * Instantiates a new learningContent and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentWebUrl property value. The content web URL for the learning content. Required.
     * @returns a string
     */
    public get contentWebUrl() {
        return this._contentWebUrl;
    };
    /**
     * Sets the contentWebUrl property value. The content web URL for the learning content. Required.
     * @param value Value to set for the contentWebUrl property.
     */
    public set contentWebUrl(value: string | undefined) {
        this._contentWebUrl = value;
    };
    /**
     * Gets the contributors property value. The authors, creators, or contributors of the learning content. Optional.
     * @returns a string
     */
    public get contributors() {
        return this._contributors;
    };
    /**
     * Sets the contributors property value. The authors, creators, or contributors of the learning content. Optional.
     * @param value Value to set for the contributors property.
     */
    public set contributors(value: string[] | undefined) {
        this._contributors = value;
    };
    /**
     * Gets the createdDateTime property value. The date and time when the learning content was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the learning content was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. The description or summary for the learning content. Optional.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description or summary for the learning content. Optional.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the duration property value. The duration of the learning content in seconds. The value is represented in ISO 8601 format for durations. Optional.
     * @returns a Duration
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. The duration of the learning content in seconds. The value is represented in ISO 8601 format for durations. Optional.
     * @param value Value to set for the duration property.
     */
    public set duration(value: Duration | undefined) {
        this._duration = value;
    };
    /**
     * Gets the externalId property value. Unique external content ID for the learning content. Required.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. Unique external content ID for the learning content. Required.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * Gets the format property value. The format of the learning content. For example, Course, Video, Book, Book Summary, Audiobook Summary. Optional.
     * @returns a string
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. The format of the learning content. For example, Course, Video, Book, Book Summary, Audiobook Summary. Optional.
     * @param value Value to set for the format property.
     */
    public set format(value: string | undefined) {
        this._format = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "additionalTags": n => { this.additionalTags = n.getCollectionOfPrimitiveValues<string>(); },
            "contentWebUrl": n => { this.contentWebUrl = n.getStringValue(); },
            "contributors": n => { this.contributors = n.getCollectionOfPrimitiveValues<string>(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "duration": n => { this.duration = n.getDurationValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "format": n => { this.format = n.getStringValue(); },
            "isActive": n => { this.isActive = n.getBooleanValue(); },
            "isPremium": n => { this.isPremium = n.getBooleanValue(); },
            "isSearchable": n => { this.isSearchable = n.getBooleanValue(); },
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "numberOfPages": n => { this.numberOfPages = n.getNumberValue(); },
            "skillTags": n => { this.skillTags = n.getCollectionOfPrimitiveValues<string>(); },
            "sourceName": n => { this.sourceName = n.getStringValue(); },
            "thumbnailWebUrl": n => { this.thumbnailWebUrl = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Gets the isActive property value. Indicates whether the content is active or not. Inactive content doesn't show up in the UI. The default value is true. Optional.
     * @returns a boolean
     */
    public get isActive() {
        return this._isActive;
    };
    /**
     * Sets the isActive property value. Indicates whether the content is active or not. Inactive content doesn't show up in the UI. The default value is true. Optional.
     * @param value Value to set for the isActive property.
     */
    public set isActive(value: boolean | undefined) {
        this._isActive = value;
    };
    /**
     * Gets the isPremium property value. Indicates whether the learning content requires the user to sign-in on the learning provider platform or not. The default value is false. Optional.
     * @returns a boolean
     */
    public get isPremium() {
        return this._isPremium;
    };
    /**
     * Sets the isPremium property value. Indicates whether the learning content requires the user to sign-in on the learning provider platform or not. The default value is false. Optional.
     * @param value Value to set for the isPremium property.
     */
    public set isPremium(value: boolean | undefined) {
        this._isPremium = value;
    };
    /**
     * Gets the isSearchable property value. Indicates whether the learning content is searchable or not. The default value is true. Optional.
     * @returns a boolean
     */
    public get isSearchable() {
        return this._isSearchable;
    };
    /**
     * Sets the isSearchable property value. Indicates whether the learning content is searchable or not. The default value is true. Optional.
     * @param value Value to set for the isSearchable property.
     */
    public set isSearchable(value: boolean | undefined) {
        this._isSearchable = value;
    };
    /**
     * Gets the languageTag property value. The language of the learning content, for example, en-us or fr-fr. Required.
     * @returns a string
     */
    public get languageTag() {
        return this._languageTag;
    };
    /**
     * Sets the languageTag property value. The language of the learning content, for example, en-us or fr-fr. Required.
     * @param value Value to set for the languageTag property.
     */
    public set languageTag(value: string | undefined) {
        this._languageTag = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when the learning content was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when the learning content was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the numberOfPages property value. The number of pages of the learning content, for example, 9. Optional.
     * @returns a integer
     */
    public get numberOfPages() {
        return this._numberOfPages;
    };
    /**
     * Sets the numberOfPages property value. The number of pages of the learning content, for example, 9. Optional.
     * @param value Value to set for the numberOfPages property.
     */
    public set numberOfPages(value: number | undefined) {
        this._numberOfPages = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("additionalTags", this.additionalTags);
        writer.writeStringValue("contentWebUrl", this.contentWebUrl);
        writer.writeCollectionOfPrimitiveValues<string>("contributors", this.contributors);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeDurationValue("duration", this.duration);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("format", this.format);
        writer.writeBooleanValue("isActive", this.isActive);
        writer.writeBooleanValue("isPremium", this.isPremium);
        writer.writeBooleanValue("isSearchable", this.isSearchable);
        writer.writeStringValue("languageTag", this.languageTag);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeNumberValue("numberOfPages", this.numberOfPages);
        writer.writeCollectionOfPrimitiveValues<string>("skillTags", this.skillTags);
        writer.writeStringValue("sourceName", this.sourceName);
        writer.writeStringValue("thumbnailWebUrl", this.thumbnailWebUrl);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Gets the skillTags property value. The skills tags associated with the learning content. Optional.
     * @returns a string
     */
    public get skillTags() {
        return this._skillTags;
    };
    /**
     * Sets the skillTags property value. The skills tags associated with the learning content. Optional.
     * @param value Value to set for the skillTags property.
     */
    public set skillTags(value: string[] | undefined) {
        this._skillTags = value;
    };
    /**
     * Gets the sourceName property value. The source name of the learning content, such as LinkedIn Learning or Coursera. Optional.
     * @returns a string
     */
    public get sourceName() {
        return this._sourceName;
    };
    /**
     * Sets the sourceName property value. The source name of the learning content, such as LinkedIn Learning or Coursera. Optional.
     * @param value Value to set for the sourceName property.
     */
    public set sourceName(value: string | undefined) {
        this._sourceName = value;
    };
    /**
     * Gets the thumbnailWebUrl property value. The URL of learning content thumbnail image. Optional.
     * @returns a string
     */
    public get thumbnailWebUrl() {
        return this._thumbnailWebUrl;
    };
    /**
     * Sets the thumbnailWebUrl property value. The URL of learning content thumbnail image. Optional.
     * @param value Value to set for the thumbnailWebUrl property.
     */
    public set thumbnailWebUrl(value: string | undefined) {
        this._thumbnailWebUrl = value;
    };
    /**
     * Gets the title property value. The title of the learning content. Required.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title of the learning content. Required.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
