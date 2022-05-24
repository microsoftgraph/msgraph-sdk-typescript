import {createPublicErrorDetailFromDiscriminatorValue} from './createPublicErrorDetailFromDiscriminatorValue';
import {createPublicInnerErrorFromDiscriminatorValue} from './createPublicInnerErrorFromDiscriminatorValue';
import {PublicErrorDetailImpl, PublicInnerErrorImpl} from './index';
import {PublicError} from './publicError';
import {PublicErrorDetail} from './publicErrorDetail';
import {PublicInnerError} from './publicInnerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicErrorImpl implements AdditionalDataHolder, Parsable, PublicError {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the error code. */
    public code?: string | undefined;
    /** Details of the error. */
    public details?: PublicErrorDetail[] | undefined;
    /** Details of the inner error. */
    public innerError?: PublicInnerError | undefined;
    /** A non-localized message for the developer. */
    public message?: string | undefined;
    /** The target of the error. */
    public target?: string | undefined;
    /**
     * Instantiates a new publicError and sets the default values.
     * @param publicErrorParameterValue 
     */
    public constructor(publicErrorParameterValue?: PublicError | undefined) {
        this.additionalData = publicErrorParameterValue?.additionalData ? publicErrorParameterValue?.additionalData! : {}
        this.code = publicErrorParameterValue?.code ;
        this.details = publicErrorParameterValue?.details ;
        this.innerError = publicErrorParameterValue?.innerError ;
        this.message = publicErrorParameterValue?.message ;
        this.target = publicErrorParameterValue?.target ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "details": n => { this.details = n.getCollectionOfObjectValues<PublicErrorDetailImpl>(createPublicErrorDetailFromDiscriminatorValue); },
            "innerError": n => { this.innerError = n.getObjectValue<PublicInnerErrorImpl>(createPublicInnerErrorFromDiscriminatorValue); },
            "message": n => { this.message = n.getStringValue(); },
            "target": n => { this.target = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.code){
        writer.writeStringValue("code", this.code);
        }
        if(this.details && this.details.length != 0){        const detailsArrValue: PublicErrorDetailImpl[] = []; this.details?.forEach(element => {detailsArrValue.push(new PublicErrorDetailImpl(element));});
        writer.writeCollectionOfObjectValues<PublicErrorDetailImpl>("details", detailsArrValue);
        }
        if(this.innerError){
        writer.writeObjectValue<PublicInnerErrorImpl>("innerError", new PublicInnerErrorImpl(this.innerError));
        }
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        if(this.target){
        writer.writeStringValue("target", this.target);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
