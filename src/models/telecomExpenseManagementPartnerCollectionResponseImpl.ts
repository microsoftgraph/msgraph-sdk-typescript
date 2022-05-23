import {createTelecomExpenseManagementPartnerFromDiscriminatorValue} from './createTelecomExpenseManagementPartnerFromDiscriminatorValue';
import {TelecomExpenseManagementPartnerImpl} from './index';
import {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import {TelecomExpenseManagementPartnerCollectionResponse} from './telecomExpenseManagementPartnerCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TelecomExpenseManagementPartnerCollectionResponseImpl implements AdditionalDataHolder, Parsable, TelecomExpenseManagementPartnerCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TelecomExpenseManagementPartner[] | undefined;
    /**
     * Instantiates a new TelecomExpenseManagementPartnerCollectionResponse and sets the default values.
     * @param telecomExpenseManagementPartnerCollectionResponseParameterValue 
     */
    public constructor(telecomExpenseManagementPartnerCollectionResponseParameterValue?: TelecomExpenseManagementPartnerCollectionResponse | undefined) {
        this.additionalData = telecomExpenseManagementPartnerCollectionResponseParameterValue?.additionalData ? telecomExpenseManagementPartnerCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = telecomExpenseManagementPartnerCollectionResponseParameterValue?.nextLink ;
        this.value = telecomExpenseManagementPartnerCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TelecomExpenseManagementPartnerImpl>(createTelecomExpenseManagementPartnerFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: TelecomExpenseManagementPartnerImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TelecomExpenseManagementPartnerImpl(element));});
        writer.writeCollectionOfObjectValues<TelecomExpenseManagementPartnerImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
