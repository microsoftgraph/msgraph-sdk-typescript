import {IosHomeScreenItemImpl} from './index';
import {IosHomeScreenApp} from './iosHomeScreenApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosHomeScreenAppImpl extends IosHomeScreenItemImpl implements IosHomeScreenApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** BundleID of the app if isWebClip is false or the URL of a web clip if isWebClip is true. */
    public bundleID?: string | undefined;
    /**
     * Instantiates a new IosHomeScreenApp and sets the default values.
     * @param iosHomeScreenAppParameterValue 
     */
    public constructor(iosHomeScreenAppParameterValue?: IosHomeScreenApp | undefined) {
        super(iosHomeScreenAppParameterValue);
        this.additionalData = iosHomeScreenAppParameterValue?.additionalData ? iosHomeScreenAppParameterValue?.additionalData! : {};
        this.bundleID = iosHomeScreenAppParameterValue?.bundleID;
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
        if(this.bundleID){
            writer.writeStringValue("bundleID", this.bundleID);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
