import {MailTipsImpl} from '../../../../../models/';
import {createMailTipsFromDiscriminatorValue} from '../../../../../models/createMailTipsFromDiscriminatorValue';
import {MailTips} from '../../../../../models/mailTips';
import {GetMailTipsResponse} from './getMailTipsResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getMailTips method. */
export class GetMailTipsResponseImpl implements AdditionalDataHolder, GetMailTipsResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: MailTips[] | undefined;
    /**
     * Instantiates a new getMailTipsResponse and sets the default values.
     * @param getMailTipsResponseParameterValue 
     */
    public constructor(getMailTipsResponseParameterValue?: GetMailTipsResponse | undefined) {
        this.additionalData = getMailTipsResponseParameterValue?.additionalData ? getMailTipsResponseParameterValue?.additionalData! : {}
        this.value = getMailTipsResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<MailTipsImpl>(createMailTipsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: MailTipsImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new MailTipsImpl(element));});
        writer.writeCollectionOfObjectValues<MailTipsImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
