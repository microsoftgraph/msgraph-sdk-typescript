import {EntityImpl} from './index';
import {ProfilePhoto} from './profilePhoto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ProfilePhotoImpl extends EntityImpl implements ProfilePhoto {
    /** The height of the photo. Read-only. */
    private _height?: number | undefined;
    /** The width of the photo. Read-only. */
    private _width?: number | undefined;
    /**
     * Instantiates a new profilePhoto and sets the default values.
     * @param profilePhotoParameterValue 
     */
    public constructor(profilePhotoParameterValue?: ProfilePhoto | undefined) {
        super(profilePhotoParameterValue);
        this._height = profilePhotoParameterValue?.height;
        this._width = profilePhotoParameterValue?.width;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "height": n => { this.height = n.getNumberValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Gets the height property value. The height of the photo. Read-only.
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Sets the height property value. The height of the photo. Read-only.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        if(value) {
            this._height = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.height){
            writer.writeNumberValue("height", this.height);
        }
        if(this.width){
            writer.writeNumberValue("width", this.width);
        }
    };
    /**
     * Gets the width property value. The width of the photo. Read-only.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * Sets the width property value. The width of the photo. Read-only.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        if(value) {
            this._width = value;
        }
    };
}
