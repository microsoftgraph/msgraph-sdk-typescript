import {ColumnDefinition} from './columnDefinition';
import {ColumnDefinitionCollectionResponse} from './columnDefinitionCollectionResponse';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {ColumnDefinitionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ColumnDefinitionCollectionResponseImpl implements AdditionalDataHolder, ColumnDefinitionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ColumnDefinition[] | undefined;
    /**
     * Instantiates a new ColumnDefinitionCollectionResponse and sets the default values.
     * @param columnDefinitionCollectionResponseParameterValue 
     */
    public constructor(columnDefinitionCollectionResponseParameterValue?: ColumnDefinitionCollectionResponse | undefined) {
        this.additionalData = columnDefinitionCollectionResponseParameterValue?.additionalData ? columnDefinitionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = columnDefinitionCollectionResponseParameterValue?.nextLink ;
        this.value = columnDefinitionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ColumnDefinitionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ColumnDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
