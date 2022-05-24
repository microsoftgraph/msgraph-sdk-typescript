import {createErrorDetailsFromDiscriminatorValue} from './createErrorDetailsFromDiscriminatorValue';
import {createInnerErrorFromDiscriminatorValue} from './createInnerErrorFromDiscriminatorValue';
import {ErrorDetails} from './errorDetails';
import {ErrorDetailsImpl, InnerErrorImpl} from './index';
import {InnerError} from './innerError';
import {MainError} from './mainError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MainErrorImpl implements AdditionalDataHolder, MainError, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The code property */
    public code?: string | undefined;
    /** The details property */
    public details?: ErrorDetails[] | undefined;
    /** The innererror property */
    public innererror?: InnerError | undefined;
    /** The message property */
    public message?: string | undefined;
    /** The target property */
    public target?: string | undefined;
    /**
     * Instantiates a new MainError and sets the default values.
     * @param mainErrorParameterValue 
     */
    public constructor(mainErrorParameterValue?: MainError | undefined) {
        this.additionalData = mainErrorParameterValue?.additionalData ? mainErrorParameterValue?.additionalData! : {}
        this.code = mainErrorParameterValue?.code ;
        this.details = mainErrorParameterValue?.details ;
        this.innererror = mainErrorParameterValue?.innererror ;
        this.message = mainErrorParameterValue?.message ;
        this.target = mainErrorParameterValue?.target ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "details": n => { this.details = n.getCollectionOfObjectValues<ErrorDetailsImpl>(createErrorDetailsFromDiscriminatorValue); },
            "innererror": n => { this.innererror = n.getObjectValue<InnerErrorImpl>(createInnerErrorFromDiscriminatorValue); },
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
        if(this.details && this.details.length != 0){        const detailsArrValue: ErrorDetailsImpl[] = []; this.details?.forEach(element => {detailsArrValue.push(new ErrorDetailsImpl(element));});
        writer.writeCollectionOfObjectValues<ErrorDetailsImpl>("details", detailsArrValue);
        }
        if(this.innererror){
        writer.writeObjectValue<InnerErrorImpl>("innererror", new InnerErrorImpl(this.innererror));
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
