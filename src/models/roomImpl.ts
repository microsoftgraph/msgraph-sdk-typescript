import {BookingType} from './bookingType';
import {PlaceImpl} from './index';
import {Room} from './room';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoomImpl extends PlaceImpl implements Room {
    /** Specifies the name of the audio device in the room. */
    public audioDeviceName?: string | undefined;
    /** Type of room. Possible values are standard, and reserved. */
    public bookingType?: BookingType | undefined;
    /** Specifies the building name or building number that the room is in. */
    public building?: string | undefined;
    /** Specifies the capacity of the room. */
    public capacity?: number | undefined;
    /** Specifies the name of the display device in the room. */
    public displayDeviceName?: string | undefined;
    /** Email address of the room. */
    public emailAddress?: string | undefined;
    /** Specifies a descriptive label for the floor, for example, P. */
    public floorLabel?: string | undefined;
    /** Specifies the floor number that the room is on. */
    public floorNumber?: number | undefined;
    /** Specifies whether the room is wheelchair accessible. */
    public isWheelChairAccessible?: boolean | undefined;
    /** Specifies a descriptive label for the room, for example, a number or name. */
    public label?: string | undefined;
    /** Specifies a nickname for the room, for example, 'conf room'. */
    public nickname?: string | undefined;
    /** Specifies additional features of the room, for example, details like the type of view or furniture type. */
    public tags?: string[] | undefined;
    /** Specifies the name of the video device in the room. */
    public videoDeviceName?: string | undefined;
    /**
     * Instantiates a new Room and sets the default values.
     * @param roomParameterValue 
     */
    public constructor(roomParameterValue?: Room | undefined) {
        super(roomParameterValue);
        this.audioDeviceName = roomParameterValue?.audioDeviceName;
        this.bookingType = roomParameterValue?.bookingType;
        this.building = roomParameterValue?.building;
        this.capacity = roomParameterValue?.capacity;
        this.displayDeviceName = roomParameterValue?.displayDeviceName;
        this.emailAddress = roomParameterValue?.emailAddress;
        this.floorLabel = roomParameterValue?.floorLabel;
        this.floorNumber = roomParameterValue?.floorNumber;
        this.isWheelChairAccessible = roomParameterValue?.isWheelChairAccessible;
        this.label = roomParameterValue?.label;
        this.nickname = roomParameterValue?.nickname;
        this.tags = roomParameterValue?.tags;
        this.videoDeviceName = roomParameterValue?.videoDeviceName;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.audioDeviceName){
            writer.writeStringValue("audioDeviceName", this.audioDeviceName);
        }
        if(this.bookingType){
            writer.writeEnumValue<BookingType>("bookingType", this.bookingType);
        }
        if(this.building){
            writer.writeStringValue("building", this.building);
        }
        if(this.capacity){
            writer.writeNumberValue("capacity", this.capacity);
        }
        if(this.displayDeviceName){
            writer.writeStringValue("displayDeviceName", this.displayDeviceName);
        }
        if(this.emailAddress){
            writer.writeStringValue("emailAddress", this.emailAddress);
        }
        if(this.floorLabel){
            writer.writeStringValue("floorLabel", this.floorLabel);
        }
        if(this.floorNumber){
            writer.writeNumberValue("floorNumber", this.floorNumber);
        }
        if(this.isWheelChairAccessible){
            writer.writeBooleanValue("isWheelChairAccessible", this.isWheelChairAccessible);
        }
        if(this.label){
            writer.writeStringValue("label", this.label);
        }
        if(this.nickname){
            writer.writeStringValue("nickname", this.nickname);
        }
        if(this.tags){
            writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        }
        if(this.videoDeviceName){
            writer.writeStringValue("videoDeviceName", this.videoDeviceName);
        }
    };
}
