import {SiteImpl} from '../../../../models/';
import {createSiteFromDiscriminatorValue} from '../../../../models/createSiteFromDiscriminatorValue';
import {Site} from '../../../../models/site';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the add method. */
export class AddPostRequestBodyImpl implements AddPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The value property */
    private _value?: Site[] | undefined;
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
     * Instantiates a new addPostRequestBody and sets the default values.
     * @param addPostRequestBodyParameterValue 
     */
    public constructor(addPostRequestBodyParameterValue?: AddPostRequestBody | undefined) {
        this._additionalData = addPostRequestBodyParameterValue?.additionalData ? addPostRequestBodyParameterValue?.additionalData! : {};
        this._value = addPostRequestBodyParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<SiteImpl>(createSiteFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: SiteImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof SiteImpl? element:new SiteImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SiteImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a SiteInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: Site[] | undefined) {
        if(value) {
            const valueArrValue: SiteImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof SiteImpl? element:new SiteImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
