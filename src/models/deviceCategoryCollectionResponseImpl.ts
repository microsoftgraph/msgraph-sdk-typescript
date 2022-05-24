import {createDeviceCategoryFromDiscriminatorValue} from './createDeviceCategoryFromDiscriminatorValue';
import {DeviceCategory} from './deviceCategory';
import {DeviceCategoryCollectionResponse} from './deviceCategoryCollectionResponse';
import {DeviceCategoryImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCategoryCollectionResponseImpl implements AdditionalDataHolder, DeviceCategoryCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceCategory[] | undefined;
    /**
     * Instantiates a new DeviceCategoryCollectionResponse and sets the default values.
     * @param deviceCategoryCollectionResponseParameterValue 
     */
    public constructor(deviceCategoryCollectionResponseParameterValue?: DeviceCategoryCollectionResponse | undefined) {
        this.additionalData = deviceCategoryCollectionResponseParameterValue?.additionalData ? deviceCategoryCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceCategoryCollectionResponseParameterValue?.nextLink ;
        this.value = deviceCategoryCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceCategoryImpl>(createDeviceCategoryFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceCategoryImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceCategoryImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceCategoryImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
