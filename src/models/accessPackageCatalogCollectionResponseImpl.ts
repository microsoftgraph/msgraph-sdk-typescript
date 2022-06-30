import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageCatalogCollectionResponse} from './accessPackageCatalogCollectionResponse';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {AccessPackageCatalogImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageCatalogCollectionResponseImpl implements AccessPackageCatalogCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: AccessPackageCatalog[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new AccessPackageCatalogCollectionResponse and sets the default values.
     * @param accessPackageCatalogCollectionResponseParameterValue 
     */
    public constructor(accessPackageCatalogCollectionResponseParameterValue?: AccessPackageCatalogCollectionResponse | undefined) {
        this._additionalData = accessPackageCatalogCollectionResponseParameterValue?.additionalData ? accessPackageCatalogCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = accessPackageCatalogCollectionResponseParameterValue?.nextLink;
        this._value = accessPackageCatalogCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessPackageCatalogImpl>(createAccessPackageCatalogFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AccessPackageCatalogImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof AccessPackageCatalogImpl? element:new AccessPackageCatalogImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessPackageCatalogImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a AccessPackageCatalogInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: AccessPackageCatalog[] | undefined) {
        if(value) {
            const valueArrValue: AccessPackageCatalogImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof AccessPackageCatalogImpl? element:new AccessPackageCatalogImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
