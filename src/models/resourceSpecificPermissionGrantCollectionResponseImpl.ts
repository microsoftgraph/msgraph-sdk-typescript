import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from './createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {ResourceSpecificPermissionGrantImpl} from './index';
import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {ResourceSpecificPermissionGrantCollectionResponse} from './resourceSpecificPermissionGrantCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceSpecificPermissionGrantCollectionResponseImpl implements ResourceSpecificPermissionGrantCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: ResourceSpecificPermissionGrant[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new ResourceSpecificPermissionGrantCollectionResponse and sets the default values.
     * @param resourceSpecificPermissionGrantCollectionResponseParameterValue 
     */
    public constructor(resourceSpecificPermissionGrantCollectionResponseParameterValue?: ResourceSpecificPermissionGrantCollectionResponse | undefined) {
        this._additionalData = resourceSpecificPermissionGrantCollectionResponseParameterValue?.additionalData ? resourceSpecificPermissionGrantCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = resourceSpecificPermissionGrantCollectionResponseParameterValue?.nextLink;
        this._value = resourceSpecificPermissionGrantCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrantImpl>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.nextLink property value. The nextLink property
     * @returns a string
     */
    public get nextLink() {
        return this._nextLink;
    };
    /**
     * Sets the @odata.nextLink property value. The nextLink property
     * @param value Value to set for the nextLink property.
     */
    public set nextLink(value: string | undefined) {
        if(value) {
            this._nextLink = value;
        }
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
        if(this.value && this.value.length != 0){        const valueArrValue: ResourceSpecificPermissionGrantImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ResourceSpecificPermissionGrantImpl? element:new ResourceSpecificPermissionGrantImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrantImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ResourceSpecificPermissionGrantInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ResourceSpecificPermissionGrant[] | undefined) {
        if(value) {
            const valueArrValue: ResourceSpecificPermissionGrantImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ResourceSpecificPermissionGrantImpl? element:new ResourceSpecificPermissionGrantImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
