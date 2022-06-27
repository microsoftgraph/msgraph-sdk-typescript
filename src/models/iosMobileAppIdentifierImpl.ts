import {MobileAppIdentifierImpl} from './index';
import {IosMobileAppIdentifier} from './iosMobileAppIdentifier';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosMobileAppIdentifierImpl extends MobileAppIdentifierImpl implements IosMobileAppIdentifier {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The identifier for an app, as specified in the app store. */
    public bundleId?: string | undefined;
    /**
     * Instantiates a new IosMobileAppIdentifier and sets the default values.
     * @param iosMobileAppIdentifierParameterValue 
     */
    public constructor(iosMobileAppIdentifierParameterValue?: IosMobileAppIdentifier | undefined) {
        super(iosMobileAppIdentifierParameterValue);
        this.additionalData = iosMobileAppIdentifierParameterValue?.additionalData ? iosMobileAppIdentifierParameterValue?.additionalData! : {};
        this.bundleId = iosMobileAppIdentifierParameterValue?.bundleId;
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
        if(this.bundleId){
            writer.writeStringValue("bundleId", this.bundleId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
