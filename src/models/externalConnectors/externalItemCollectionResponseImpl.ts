import {createExternalItemFromDiscriminatorValue} from './createExternalItemFromDiscriminatorValue';
import {ExternalItem} from './externalItem';
import {ExternalItemCollectionResponse} from './externalItemCollectionResponse';
import {ExternalItemImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalItemCollectionResponseImpl implements AdditionalDataHolder, ExternalItemCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ExternalItem[] | undefined;
    /**
     * Instantiates a new ExternalItemCollectionResponse and sets the default values.
     * @param externalItemCollectionResponseParameterValue 
     */
    public constructor(externalItemCollectionResponseParameterValue?: ExternalItemCollectionResponse | undefined) {
        this.additionalData = externalItemCollectionResponseParameterValue?.additionalData ? externalItemCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = externalItemCollectionResponseParameterValue?.nextLink ;
        this.value = externalItemCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ExternalItemImpl>(createExternalItemFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ExternalItemImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ExternalItemImpl(element));});
        writer.writeCollectionOfObjectValues<ExternalItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
