import {MobileAppIdentifier} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidMobileAppIdentifier extends MobileAppIdentifier implements Parsable {
    /** The identifier for an app, as specified in the play store. */
    private _packageId?: string | undefined;
    /**
     * Instantiates a new AndroidMobileAppIdentifier and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.androidMobileAppIdentifier";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "packageId": n => { this.packageId = n.getStringValue(); },
        };
    };
    /**
     * Gets the packageId property value. The identifier for an app, as specified in the play store.
     * @returns a string
     */
    public get packageId() {
        return this._packageId;
    };
    /**
     * Sets the packageId property value. The identifier for an app, as specified in the play store.
     * @param value Value to set for the packageId property.
     */
    public set packageId(value: string | undefined) {
        this._packageId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("packageId", this.packageId);
    };
}
