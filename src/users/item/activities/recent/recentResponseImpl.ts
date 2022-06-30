import {UserActivityImpl} from '../../../../models/';
import {createUserActivityFromDiscriminatorValue} from '../../../../models/createUserActivityFromDiscriminatorValue';
import {UserActivity} from '../../../../models/userActivity';
import {RecentResponse} from './recentResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the recent method. */
export class RecentResponseImpl implements RecentResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The value property */
    private _value?: UserActivity[] | undefined;
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
     * Instantiates a new recentResponse and sets the default values.
     * @param recentResponseParameterValue 
     */
    public constructor(recentResponseParameterValue?: RecentResponse | undefined) {
        this._additionalData = recentResponseParameterValue?.additionalData ? recentResponseParameterValue?.additionalData! : {};
        this._value = recentResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<UserActivityImpl>(createUserActivityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: UserActivityImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof UserActivityImpl? element:new UserActivityImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UserActivityImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a UserActivityInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: UserActivity[] | undefined) {
        if(value) {
            const valueArrValue: UserActivityImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof UserActivityImpl? element:new UserActivityImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
