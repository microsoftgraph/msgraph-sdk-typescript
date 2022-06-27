import {AndroidMobileAppIdentifier} from './androidMobileAppIdentifier';
import {MobileAppIdentifierImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidMobileAppIdentifierImpl extends MobileAppIdentifierImpl implements AndroidMobileAppIdentifier {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The identifier for an app, as specified in the play store. */
    public packageId?: string | undefined;
    /**
     * Instantiates a new AndroidMobileAppIdentifier and sets the default values.
     * @param androidMobileAppIdentifierParameterValue 
     */
    public constructor(androidMobileAppIdentifierParameterValue?: AndroidMobileAppIdentifier | undefined) {
        super(androidMobileAppIdentifierParameterValue);
        this.additionalData = androidMobileAppIdentifierParameterValue?.additionalData ? androidMobileAppIdentifierParameterValue?.additionalData! : {};
        this.packageId = androidMobileAppIdentifierParameterValue?.packageId;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.packageId){
            writer.writeStringValue("packageId", this.packageId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
