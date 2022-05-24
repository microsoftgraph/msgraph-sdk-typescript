import {SignInStatus} from './signInStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInStatusImpl implements AdditionalDataHolder, Parsable, SignInStatus {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Provides additional details on the sign-in activity */
    public additionalDetails?: string | undefined;
    /** Provides the 5-6 digit error code that's generated during a sign-in failure. Check out the list of error codes and messages. */
    public errorCode?: number | undefined;
    /** Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of error codes and messages. */
    public failureReason?: string | undefined;
    /**
     * Instantiates a new signInStatus and sets the default values.
     * @param signInStatusParameterValue 
     */
    public constructor(signInStatusParameterValue?: SignInStatus | undefined) {
        this.additionalData = signInStatusParameterValue?.additionalData ? signInStatusParameterValue?.additionalData! : {}
        this.additionalDetails = signInStatusParameterValue?.additionalDetails ;
        this.errorCode = signInStatusParameterValue?.errorCode ;
        this.failureReason = signInStatusParameterValue?.failureReason ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "additionalDetails": n => { this.additionalDetails = n.getStringValue(); },
            "errorCode": n => { this.errorCode = n.getNumberValue(); },
            "failureReason": n => { this.failureReason = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.additionalDetails){
        writer.writeStringValue("additionalDetails", this.additionalDetails);
        }
        if(this.errorCode){
        writer.writeNumberValue("errorCode", this.errorCode);
        }
        if(this.failureReason){
        writer.writeStringValue("failureReason", this.failureReason);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
