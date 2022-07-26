import {IosHomeScreenItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosHomeScreenApp extends IosHomeScreenItem implements Parsable {
    /** BundleID of the app if isWebClip is false or the URL of a web clip if isWebClip is true. */
    private _bundleID?: string | undefined;
    /**
     * Gets the bundleID property value. BundleID of the app if isWebClip is false or the URL of a web clip if isWebClip is true.
     * @returns a string
     */
    public get bundleID() {
        return this._bundleID;
    };
    /**
     * Sets the bundleID property value. BundleID of the app if isWebClip is false or the URL of a web clip if isWebClip is true.
     * @param value Value to set for the bundleID property.
     */
    public set bundleID(value: string | undefined) {
        this._bundleID = value;
    };
    /**
     * Instantiates a new IosHomeScreenApp and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosHomeScreenApp";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bundleID": n => { this.bundleID = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("bundleID", this.bundleID);
    };
}
