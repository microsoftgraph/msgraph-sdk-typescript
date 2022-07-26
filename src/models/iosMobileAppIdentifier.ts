import {MobileAppIdentifier} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosMobileAppIdentifier extends MobileAppIdentifier implements Parsable {
    /** The identifier for an app, as specified in the app store. */
    private _bundleId?: string | undefined;
    /**
     * Gets the bundleId property value. The identifier for an app, as specified in the app store.
     * @returns a string
     */
    public get bundleId() {
        return this._bundleId;
    };
    /**
     * Sets the bundleId property value. The identifier for an app, as specified in the app store.
     * @param value Value to set for the bundleId property.
     */
    public set bundleId(value: string | undefined) {
        this._bundleId = value;
    };
    /**
     * Instantiates a new IosMobileAppIdentifier and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosMobileAppIdentifier";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bundleId": n => { this.bundleId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("bundleId", this.bundleId);
    };
}
