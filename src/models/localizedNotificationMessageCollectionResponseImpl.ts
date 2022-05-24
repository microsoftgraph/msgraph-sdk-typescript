import {createLocalizedNotificationMessageFromDiscriminatorValue} from './createLocalizedNotificationMessageFromDiscriminatorValue';
import {LocalizedNotificationMessageImpl} from './index';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {LocalizedNotificationMessageCollectionResponse} from './localizedNotificationMessageCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocalizedNotificationMessageCollectionResponseImpl implements AdditionalDataHolder, LocalizedNotificationMessageCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: LocalizedNotificationMessage[] | undefined;
    /**
     * Instantiates a new LocalizedNotificationMessageCollectionResponse and sets the default values.
     * @param localizedNotificationMessageCollectionResponseParameterValue 
     */
    public constructor(localizedNotificationMessageCollectionResponseParameterValue?: LocalizedNotificationMessageCollectionResponse | undefined) {
        this.additionalData = localizedNotificationMessageCollectionResponseParameterValue?.additionalData ? localizedNotificationMessageCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = localizedNotificationMessageCollectionResponseParameterValue?.nextLink ;
        this.value = localizedNotificationMessageCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<LocalizedNotificationMessageImpl>(createLocalizedNotificationMessageFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: LocalizedNotificationMessageImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new LocalizedNotificationMessageImpl(element));});
        writer.writeCollectionOfObjectValues<LocalizedNotificationMessageImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
