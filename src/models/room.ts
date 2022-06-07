import {BookingType} from './bookingType';
import {Place} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to room. */
export class Room extends Place implements Parsable {
    /** Specifies the name of the audio device in the room. */
    private _audioDeviceName?: string | undefined;
    /** Type of room. Possible values are standard, and reserved. */
    private _bookingType?: BookingType | undefined;
    /** Specifies the building name or building number that the room is in. */
    private _building?: string | undefined;
    /** Specifies the capacity of the room. */
    private _capacity?: number | undefined;
    /** Specifies the name of the display device in the room. */
    private _displayDeviceName?: string | undefined;
    /** Email address of the room. */
    private _emailAddress?: string | undefined;
    /** Specifies a descriptive label for the floor, for example, P. */
    private _floorLabel?: string | undefined;
    /** Specifies the floor number that the room is on. */
    private _floorNumber?: number | undefined;
    /** Specifies whether the room is wheelchair accessible. */
    private _isWheelChairAccessible?: boolean | undefined;
    /** Specifies a descriptive label for the room, for example, a number or name. */
    private _label?: string | undefined;
    /** Specifies a nickname for the room, for example, 'conf room'. */
    private _nickname?: string | undefined;
    /** Specifies additional features of the room, for example, details like the type of view or furniture type. */
    private _tags?: string[] | undefined;
    /** Specifies the name of the video device in the room. */
    private _videoDeviceName?: string | undefined;
    /**
     * Gets the audioDeviceName property value. Specifies the name of the audio device in the room.
     * @returns a string
     */
    public get audioDeviceName() {
        return this._audioDeviceName;
    };
    /**
     * Sets the audioDeviceName property value. Specifies the name of the audio device in the room.
     * @param value Value to set for the audioDeviceName property.
     */
    public set audioDeviceName(value: string | undefined) {
        this._audioDeviceName = value;
    };
    /**
     * Gets the bookingType property value. Type of room. Possible values are standard, and reserved.
     * @returns a bookingType
     */
    public get bookingType() {
        return this._bookingType;
    };
    /**
     * Sets the bookingType property value. Type of room. Possible values are standard, and reserved.
     * @param value Value to set for the bookingType property.
     */
    public set bookingType(value: BookingType | undefined) {
        this._bookingType = value;
    };
    /**
     * Gets the building property value. Specifies the building name or building number that the room is in.
     * @returns a string
     */
    public get building() {
        return this._building;
    };
    /**
     * Sets the building property value. Specifies the building name or building number that the room is in.
     * @param value Value to set for the building property.
     */
    public set building(value: string | undefined) {
        this._building = value;
    };
    /**
     * Gets the capacity property value. Specifies the capacity of the room.
     * @returns a integer
     */
    public get capacity() {
        return this._capacity;
    };
    /**
     * Sets the capacity property value. Specifies the capacity of the room.
     * @param value Value to set for the capacity property.
     */
    public set capacity(value: number | undefined) {
        this._capacity = value;
    };
    /**
     * Instantiates a new room and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayDeviceName property value. Specifies the name of the display device in the room.
     * @returns a string
     */
    public get displayDeviceName() {
        return this._displayDeviceName;
    };
    /**
     * Sets the displayDeviceName property value. Specifies the name of the display device in the room.
     * @param value Value to set for the displayDeviceName property.
     */
    public set displayDeviceName(value: string | undefined) {
        this._displayDeviceName = value;
    };
    /**
     * Gets the emailAddress property value. Email address of the room.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. Email address of the room.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * Gets the floorLabel property value. Specifies a descriptive label for the floor, for example, P.
     * @returns a string
     */
    public get floorLabel() {
        return this._floorLabel;
    };
    /**
     * Sets the floorLabel property value. Specifies a descriptive label for the floor, for example, P.
     * @param value Value to set for the floorLabel property.
     */
    public set floorLabel(value: string | undefined) {
        this._floorLabel = value;
    };
    /**
     * Gets the floorNumber property value. Specifies the floor number that the room is on.
     * @returns a integer
     */
    public get floorNumber() {
        return this._floorNumber;
    };
    /**
     * Sets the floorNumber property value. Specifies the floor number that the room is on.
     * @param value Value to set for the floorNumber property.
     */
    public set floorNumber(value: number | undefined) {
        this._floorNumber = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "audioDeviceName": n => { this.audioDeviceName = n.getStringValue(); },
            "bookingType": n => { this.bookingType = n.getEnumValue<BookingType>(BookingType); },
            "building": n => { this.building = n.getStringValue(); },
            "capacity": n => { this.capacity = n.getNumberValue(); },
            "displayDeviceName": n => { this.displayDeviceName = n.getStringValue(); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "floorLabel": n => { this.floorLabel = n.getStringValue(); },
            "floorNumber": n => { this.floorNumber = n.getNumberValue(); },
            "isWheelChairAccessible": n => { this.isWheelChairAccessible = n.getBooleanValue(); },
            "label": n => { this.label = n.getStringValue(); },
            "nickname": n => { this.nickname = n.getStringValue(); },
            "tags": n => { this.tags = n.getCollectionOfPrimitiveValues<string>(); },
            "videoDeviceName": n => { this.videoDeviceName = n.getStringValue(); },
        };
    };
    /**
     * Gets the isWheelChairAccessible property value. Specifies whether the room is wheelchair accessible.
     * @returns a boolean
     */
    public get isWheelChairAccessible() {
        return this._isWheelChairAccessible;
    };
    /**
     * Sets the isWheelChairAccessible property value. Specifies whether the room is wheelchair accessible.
     * @param value Value to set for the isWheelChairAccessible property.
     */
    public set isWheelChairAccessible(value: boolean | undefined) {
        this._isWheelChairAccessible = value;
    };
    /**
     * Gets the label property value. Specifies a descriptive label for the room, for example, a number or name.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Sets the label property value. Specifies a descriptive label for the room, for example, a number or name.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        this._label = value;
    };
    /**
     * Gets the nickname property value. Specifies a nickname for the room, for example, 'conf room'.
     * @returns a string
     */
    public get nickname() {
        return this._nickname;
    };
    /**
     * Sets the nickname property value. Specifies a nickname for the room, for example, 'conf room'.
     * @param value Value to set for the nickname property.
     */
    public set nickname(value: string | undefined) {
        this._nickname = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("audioDeviceName", this.audioDeviceName);
        writer.writeEnumValue<BookingType>("bookingType", this.bookingType);
        writer.writeStringValue("building", this.building);
        writer.writeNumberValue("capacity", this.capacity);
        writer.writeStringValue("displayDeviceName", this.displayDeviceName);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeStringValue("floorLabel", this.floorLabel);
        writer.writeNumberValue("floorNumber", this.floorNumber);
        writer.writeBooleanValue("isWheelChairAccessible", this.isWheelChairAccessible);
        writer.writeStringValue("label", this.label);
        writer.writeStringValue("nickname", this.nickname);
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        writer.writeStringValue("videoDeviceName", this.videoDeviceName);
    };
    /**
     * Gets the tags property value. Specifies additional features of the room, for example, details like the type of view or furniture type.
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. Specifies additional features of the room, for example, details like the type of view or furniture type.
     * @param value Value to set for the tags property.
     */
    public set tags(value: string[] | undefined) {
        this._tags = value;
    };
    /**
     * Gets the videoDeviceName property value. Specifies the name of the video device in the room.
     * @returns a string
     */
    public get videoDeviceName() {
        return this._videoDeviceName;
    };
    /**
     * Sets the videoDeviceName property value. Specifies the name of the video device in the room.
     * @param value Value to set for the videoDeviceName property.
     */
    public set videoDeviceName(value: string | undefined) {
        this._videoDeviceName = value;
    };
}
