import {BaseItem} from './baseItem';
import {BaseItemCollectionResponse} from './baseItemCollectionResponse';
import {createBaseItemFromDiscriminatorValue} from './createBaseItemFromDiscriminatorValue';
import {BaseItemImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BaseItemCollectionResponseImpl implements AdditionalDataHolder, BaseItemCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: BaseItem[] | undefined;
    /**
     * Instantiates a new BaseItemCollectionResponse and sets the default values.
     * @param baseItemCollectionResponseParameterValue 
     */
    public constructor(baseItemCollectionResponseParameterValue?: BaseItemCollectionResponse | undefined) {
        this.additionalData = baseItemCollectionResponseParameterValue?.additionalData ? baseItemCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = baseItemCollectionResponseParameterValue?.nextLink ;
        this.value = baseItemCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<BaseItemImpl>(createBaseItemFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: BaseItemImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new BaseItemImpl(element));});
        writer.writeCollectionOfObjectValues<BaseItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
