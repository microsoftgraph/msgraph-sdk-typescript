import {MailTipsType} from '../../../models/mailTipsType';
import {GetMailTipsRequestBody} from './getMailTipsRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getMailTips method.  */
export class GetMailTipsRequestBodyImpl implements AdditionalDataHolder, GetMailTipsRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The EmailAddresses property  */
    emailAddresses?: string[] | undefined;
    /** The MailTipsOptions property  */
    mailTipsOptions?: MailTipsType | undefined;
    /**
     * Instantiates a new getMailTipsRequestBody and sets the default values.
     * @param getMailTipsRequestBodyParameterValue 
     */
    public constructor(getMailTipsRequestBodyParameterValue?: GetMailTipsRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = getMailTipsRequestBodyParameterValue?.additionalData ? {} : getMailTipsRequestBodyParameterValue?.additionalData!
        this.emailAddresses = getMailTipsRequestBodyParameterValue?.emailAddresses ;
        this.mailTipsOptions = getMailTipsRequestBodyParameterValue?.mailTipsOptions ;
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
        if(this.emailAddresses)
        writer.writeCollectionOfPrimitiveValues<string>("emailAddresses", this.emailAddresses);
        }
        if(this.mailTipsOptions){
        if(this.mailTipsOptions)
        writer.writeEnumValue<MailTipsType>("mailTipsOptions", this.mailTipsOptions);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
