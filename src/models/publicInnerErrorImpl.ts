import {createPublicErrorDetailFromDiscriminatorValue} from './createPublicErrorDetailFromDiscriminatorValue';
import {PublicErrorDetailImpl} from './index';
import {PublicErrorDetail} from './publicErrorDetail';
import {PublicInnerError} from './publicInnerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicInnerErrorImpl implements AdditionalDataHolder, Parsable, PublicInnerError {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The error code. */
    public code?: string | undefined;
    /** A collection of error details. */
    public details?: PublicErrorDetail[] | undefined;
    /** The error message. */
    public message?: string | undefined;
    /** The target of the error. */
    public target?: string | undefined;
    /**
     * Instantiates a new publicInnerError and sets the default values.
     * @param publicInnerErrorParameterValue 
     */
    public constructor(publicInnerErrorParameterValue?: PublicInnerError | undefined) {
        this.additionalData = publicInnerErrorParameterValue?.additionalData ? publicInnerErrorParameterValue?.additionalData! : {}
        this.code = publicInnerErrorParameterValue?.code ;
        this.details = publicInnerErrorParameterValue?.details ;
        this.message = publicInnerErrorParameterValue?.message ;
        this.target = publicInnerErrorParameterValue?.target ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "details": n => { this.details = n.getCollectionOfObjectValues<PublicErrorDetailImpl>(createPublicErrorDetailFromDiscriminatorValue); },
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
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        if(this.target){
        writer.writeStringValue("target", this.target);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
