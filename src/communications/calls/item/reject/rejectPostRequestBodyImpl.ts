import {RejectReason} from '../../../../models/rejectReason';
import {RejectPostRequestBody} from './rejectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reject method. */
export class RejectPostRequestBodyImpl implements AdditionalDataHolder, Parsable, RejectPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The callbackUri property */
    public callbackUri?: string | undefined;
    /** The reason property */
    public reason?: RejectReason | undefined;
    /**
     * Instantiates a new rejectPostRequestBody and sets the default values.
     * @param rejectPostRequestBodyParameterValue 
     */
    public constructor(rejectPostRequestBodyParameterValue?: RejectPostRequestBody | undefined) {
        this.additionalData = rejectPostRequestBodyParameterValue?.additionalData ? rejectPostRequestBodyParameterValue?.additionalData! : {}
        this.callbackUri = rejectPostRequestBodyParameterValue?.callbackUri ;
        this.reason = rejectPostRequestBodyParameterValue?.reason ;
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
        writer.writeStringValue("callbackUri", this.callbackUri);
        }
        if(this.reason){
        writer.writeEnumValue<RejectReason>("reason", this.reason);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
