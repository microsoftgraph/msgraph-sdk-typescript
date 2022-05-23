import {ColumnLink} from './columnLink';
import {ColumnLinkCollectionResponse} from './columnLinkCollectionResponse';
import {createColumnLinkFromDiscriminatorValue} from './createColumnLinkFromDiscriminatorValue';
import {ColumnLinkImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ColumnLinkCollectionResponseImpl implements AdditionalDataHolder, ColumnLinkCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ColumnLink[] | undefined;
    /**
     * Instantiates a new ColumnLinkCollectionResponse and sets the default values.
     * @param columnLinkCollectionResponseParameterValue 
     */
    public constructor(columnLinkCollectionResponseParameterValue?: ColumnLinkCollectionResponse | undefined) {
        this.additionalData = columnLinkCollectionResponseParameterValue?.additionalData ? columnLinkCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = columnLinkCollectionResponseParameterValue?.nextLink ;
        this.value = columnLinkCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ColumnLinkImpl>(createColumnLinkFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ColumnLinkImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ColumnLinkImpl(element));});
        writer.writeCollectionOfObjectValues<ColumnLinkImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
