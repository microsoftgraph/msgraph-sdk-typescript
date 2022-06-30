import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {B2xIdentityUserFlowCollectionResponse} from './b2xIdentityUserFlowCollectionResponse';
import {createB2xIdentityUserFlowFromDiscriminatorValue} from './createB2xIdentityUserFlowFromDiscriminatorValue';
import {B2xIdentityUserFlowImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class B2xIdentityUserFlowCollectionResponseImpl implements B2xIdentityUserFlowCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: B2xIdentityUserFlow[] | undefined;
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
     * Instantiates a new B2xIdentityUserFlowCollectionResponse and sets the default values.
     * @param b2xIdentityUserFlowCollectionResponseParameterValue 
     */
    public constructor(b2xIdentityUserFlowCollectionResponseParameterValue?: B2xIdentityUserFlowCollectionResponse | undefined) {
        this._additionalData = b2xIdentityUserFlowCollectionResponseParameterValue?.additionalData ? b2xIdentityUserFlowCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = b2xIdentityUserFlowCollectionResponseParameterValue?.nextLink;
        this._value = b2xIdentityUserFlowCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<B2xIdentityUserFlowImpl>(createB2xIdentityUserFlowFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: B2xIdentityUserFlowImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof B2xIdentityUserFlowImpl? element:new B2xIdentityUserFlowImpl(element)));
        });
            writer.writeCollectionOfObjectValues<B2xIdentityUserFlowImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a B2xIdentityUserFlowInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: B2xIdentityUserFlow[] | undefined) {
        if(value) {
            const valueArrValue: B2xIdentityUserFlowImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof B2xIdentityUserFlowImpl? element:new B2xIdentityUserFlowImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
