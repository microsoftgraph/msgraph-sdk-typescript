import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {UnifiedRoleEligibilityScheduleInstanceImpl} from './index';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstanceCollectionResponse} from './unifiedRoleEligibilityScheduleInstanceCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleEligibilityScheduleInstanceCollectionResponseImpl implements UnifiedRoleEligibilityScheduleInstanceCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: UnifiedRoleEligibilityScheduleInstance[] | undefined;
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
     * Instantiates a new UnifiedRoleEligibilityScheduleInstanceCollectionResponse and sets the default values.
     * @param unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue?: UnifiedRoleEligibilityScheduleInstanceCollectionResponse | undefined) {
        this._additionalData = unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue?.additionalData ? unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue?.nextLink;
        this._value = unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstanceImpl>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleEligibilityScheduleInstanceImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof UnifiedRoleEligibilityScheduleInstanceImpl? element:new UnifiedRoleEligibilityScheduleInstanceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstanceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a UnifiedRoleEligibilityScheduleInstanceInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: UnifiedRoleEligibilityScheduleInstance[] | undefined) {
        if(value) {
            const valueArrValue: UnifiedRoleEligibilityScheduleInstanceImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof UnifiedRoleEligibilityScheduleInstanceImpl? element:new UnifiedRoleEligibilityScheduleInstanceImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
