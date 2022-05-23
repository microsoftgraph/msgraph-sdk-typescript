import {FreeBusyError} from './freeBusyError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FreeBusyErrorImpl implements AdditionalDataHolder, FreeBusyError, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Describes the error. */
    public message?: string | undefined;
    /** The response code from querying for the availability of the user, distribution list, or resource. */
    public responseCode?: string | undefined;
    /**
     * Instantiates a new freeBusyError and sets the default values.
     * @param freeBusyErrorParameterValue 
     */
    public constructor(freeBusyErrorParameterValue?: FreeBusyError | undefined) {
        this.additionalData = freeBusyErrorParameterValue?.additionalData ? freeBusyErrorParameterValue?.additionalData! : {}
        this.message = freeBusyErrorParameterValue?.message ;
        this.responseCode = freeBusyErrorParameterValue?.responseCode ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "message": n => { this.message = n.getStringValue(); },
            "responseCode": n => { this.responseCode = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        if(this.responseCode){
        writer.writeStringValue("responseCode", this.responseCode);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
