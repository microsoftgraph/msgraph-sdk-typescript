import {createManagedAppStatusFromDiscriminatorValue} from './createManagedAppStatusFromDiscriminatorValue';
import {ManagedAppStatusImpl} from './index';
import {ManagedAppStatus} from './managedAppStatus';
import {ManagedAppStatusCollectionResponse} from './managedAppStatusCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppStatusCollectionResponseImpl implements ManagedAppStatusCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: ManagedAppStatus[] | undefined;
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
     * Instantiates a new ManagedAppStatusCollectionResponse and sets the default values.
     * @param managedAppStatusCollectionResponseParameterValue 
     */
    public constructor(managedAppStatusCollectionResponseParameterValue?: ManagedAppStatusCollectionResponse | undefined) {
        this._additionalData = managedAppStatusCollectionResponseParameterValue?.additionalData ? managedAppStatusCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = managedAppStatusCollectionResponseParameterValue?.nextLink;
        this._value = managedAppStatusCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedAppStatusImpl>(createManagedAppStatusFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedAppStatusImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ManagedAppStatusImpl? element as ManagedAppStatusImpl:new ManagedAppStatusImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedAppStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ManagedAppStatusInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ManagedAppStatus[] | undefined) {
        if(value) {
            const valueArrValue: ManagedAppStatusImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ManagedAppStatusImpl? element as ManagedAppStatusImpl:new ManagedAppStatusImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
