import {createOutlookCategoryFromDiscriminatorValue} from './createOutlookCategoryFromDiscriminatorValue';
import {OutlookCategoryImpl} from './index';
import {OutlookCategory} from './outlookCategory';
import {OutlookCategoryCollectionResponse} from './outlookCategoryCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutlookCategoryCollectionResponseImpl implements AdditionalDataHolder, OutlookCategoryCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: OutlookCategory[] | undefined;
    /**
     * Instantiates a new OutlookCategoryCollectionResponse and sets the default values.
     * @param outlookCategoryCollectionResponseParameterValue 
     */
    public constructor(outlookCategoryCollectionResponseParameterValue?: OutlookCategoryCollectionResponse | undefined) {
        this.additionalData = outlookCategoryCollectionResponseParameterValue?.additionalData ? outlookCategoryCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = outlookCategoryCollectionResponseParameterValue?.nextLink ;
        this.value = outlookCategoryCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OutlookCategoryImpl>(createOutlookCategoryFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: OutlookCategoryImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OutlookCategoryImpl(element));});
        writer.writeCollectionOfObjectValues<OutlookCategoryImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
