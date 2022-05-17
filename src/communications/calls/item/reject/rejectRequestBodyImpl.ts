import {RejectReason} from '../../../../models/rejectReason';
import {RejectRequestBody} from './rejectRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reject method. */
export class RejectRequestBodyImpl implements AdditionalDataHolder, Parsable, RejectRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The callbackUri property */
    callbackUri?: string | undefined;
    /** The reason property */
    reason?: RejectReason | undefined;
    /**
     * Instantiates a new rejectRequestBody and sets the default values.
     * @param rejectRequestBodyParameterValue 
     */
    public constructor(rejectRequestBodyParameterValue?: RejectRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = rejectRequestBodyParameterValue?.additionalData ? {} : rejectRequestBodyParameterValue?.additionalData!
        this.callbackUri = rejectRequestBodyParameterValue?.callbackUri ;
        this.reason = rejectRequestBodyParameterValue?.reason ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "callbackUri": n => { this.callbackUri = n.getStringValue(); },
            "reason": n => { this.reason = n.getEnumValue<RejectReason>(RejectReason); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.callbackUri){
        if(this.callbackUri)
        writer.writeStringValue("callbackUri", this.callbackUri);
        }
        if(this.reason){
        if(this.reason)
        writer.writeEnumValue<RejectReason>("reason", this.reason);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
