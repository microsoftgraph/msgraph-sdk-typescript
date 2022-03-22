import {MailTipsType} from '../../../models/microsoft/graph/mailTipsType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getMailTips method.  */
export class GetMailTipsRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _emailAddresses?: string[] | undefined;
    private _mailTipsOptions?: MailTipsType | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new getMailTipsRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the emailAddresses property value. 
     * @returns a string
     */
    public get emailAddresses() {
        return this._emailAddresses;
    };
    /**
     * Sets the emailAddresses property value. 
     * @param value Value to set for the EmailAddresses property.
     */
    public set emailAddresses(value: string[] | undefined) {
        this._emailAddresses = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "emailAddresses": (o, n) => { (o as unknown as GetMailTipsRequestBody).emailAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "mailTipsOptions": (o, n) => { (o as unknown as GetMailTipsRequestBody).mailTipsOptions = n.getEnumValue<MailTipsType>(MailTipsType); },
        };
    };
    /**
     * Gets the mailTipsOptions property value. 
     * @returns a mailTipsType
     */
    public get mailTipsOptions() {
        return this._mailTipsOptions;
    };
    /**
     * Sets the mailTipsOptions property value. 
     * @param value Value to set for the MailTipsOptions property.
     */
    public set mailTipsOptions(value: MailTipsType | undefined) {
        this._mailTipsOptions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("emailAddresses", this.emailAddresses);
        writer.writeEnumValue<MailTipsType>("mailTipsOptions", this.mailTipsOptions);
        writer.writeAdditionalData(this.additionalData);
    };
}
