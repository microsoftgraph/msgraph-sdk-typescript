import {MailTipsType} from '../../../../../../../../../models/mailTipsType';
import {GetMailTipsPostRequestBody} from './getMailTipsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getMailTips method. */
export class GetMailTipsPostRequestBodyImpl implements AdditionalDataHolder, GetMailTipsPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The EmailAddresses property */
    public emailAddresses?: string[] | undefined;
    /** The MailTipsOptions property */
    public mailTipsOptions?: MailTipsType | undefined;
    /**
     * Instantiates a new getMailTipsPostRequestBody and sets the default values.
     * @param getMailTipsPostRequestBodyParameterValue 
     */
    public constructor(getMailTipsPostRequestBodyParameterValue?: GetMailTipsPostRequestBody | undefined) {
        this.additionalData = getMailTipsPostRequestBodyParameterValue?.additionalData ? getMailTipsPostRequestBodyParameterValue?.additionalData! : {}
        this.emailAddresses = getMailTipsPostRequestBodyParameterValue?.emailAddresses ;
        this.mailTipsOptions = getMailTipsPostRequestBodyParameterValue?.mailTipsOptions ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "emailAddresses": n => { this.emailAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "mailTipsOptions": n => { this.mailTipsOptions = n.getEnumValue<MailTipsType>(MailTipsType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.emailAddresses){
        writer.writeCollectionOfPrimitiveValues<string>("emailAddresses", this.emailAddresses);
        }
        if(this.mailTipsOptions){
        writer.writeEnumValue<MailTipsType>("mailTipsOptions", this.mailTipsOptions);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
