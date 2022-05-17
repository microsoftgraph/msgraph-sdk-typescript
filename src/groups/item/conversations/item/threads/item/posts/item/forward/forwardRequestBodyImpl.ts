import {RecipientImpl} from '../../../../../../../../../models/';
import {createRecipientFromDiscriminatorValue} from '../../../../../../../../../models/createRecipientFromDiscriminatorValue';
import {Recipient} from '../../../../../../../../../models/recipient';
import {ForwardRequestBody} from './forwardRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the forward method. */
export class ForwardRequestBodyImpl implements AdditionalDataHolder, ForwardRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The Comment property */
    comment?: string | undefined;
    /** The ToRecipients property */
    toRecipients?: Recipient[] | undefined;
    /**
     * Instantiates a new forwardRequestBody and sets the default values.
     * @param forwardRequestBodyParameterValue 
     */
    public constructor(forwardRequestBodyParameterValue?: ForwardRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = forwardRequestBodyParameterValue?.additionalData ? {} : forwardRequestBodyParameterValue?.additionalData!
        this.comment = forwardRequestBodyParameterValue?.comment ;
        this.toRecipients = forwardRequestBodyParameterValue?.toRecipients ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "toRecipients": n => { this.toRecipients = n.getCollectionOfObjectValues<RecipientImpl>(createRecipientFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.comment){
        if(this.comment)
        writer.writeStringValue("comment", this.comment);
        }
        if(this.toRecipients){
        const toRecipientsArrValue: RecipientImpl[] = []; this.toRecipients?.forEach(element => {toRecipientsArrValue.push(new RecipientImpl(element));});
        writer.writeCollectionOfObjectValues<RecipientImpl>("toRecipients", toRecipientsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
