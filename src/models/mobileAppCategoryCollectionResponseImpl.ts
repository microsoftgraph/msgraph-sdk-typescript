import {createMobileAppCategoryFromDiscriminatorValue} from './createMobileAppCategoryFromDiscriminatorValue';
import {MobileAppCategoryImpl} from './index';
import {MobileAppCategory} from './mobileAppCategory';
import {MobileAppCategoryCollectionResponse} from './mobileAppCategoryCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileAppCategoryCollectionResponseImpl implements AdditionalDataHolder, MobileAppCategoryCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: MobileAppCategory[] | undefined;
    /**
     * Instantiates a new MobileAppCategoryCollectionResponse and sets the default values.
     * @param mobileAppCategoryCollectionResponseParameterValue 
     */
    public constructor(mobileAppCategoryCollectionResponseParameterValue?: MobileAppCategoryCollectionResponse | undefined) {
        this.additionalData = mobileAppCategoryCollectionResponseParameterValue?.additionalData ? mobileAppCategoryCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = mobileAppCategoryCollectionResponseParameterValue?.nextLink ;
        this.value = mobileAppCategoryCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<MobileAppCategoryImpl>(createMobileAppCategoryFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: MobileAppCategoryImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new MobileAppCategoryImpl(element));});
        writer.writeCollectionOfObjectValues<MobileAppCategoryImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
