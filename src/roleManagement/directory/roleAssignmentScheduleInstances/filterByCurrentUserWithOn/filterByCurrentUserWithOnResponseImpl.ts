import {UnifiedRoleAssignmentScheduleInstanceImpl} from '../../../../models/';
import {createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue} from '../../../../models/createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue';
import {UnifiedRoleAssignmentScheduleInstance} from '../../../../models/unifiedRoleAssignmentScheduleInstance';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the filterByCurrentUser method. */
export class FilterByCurrentUserWithOnResponseImpl implements FilterByCurrentUserWithOnResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The value property */
    private _value?: UnifiedRoleAssignmentScheduleInstance[] | undefined;
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
     * Instantiates a new filterByCurrentUserWithOnResponse and sets the default values.
     * @param filterByCurrentUserWithOnResponseParameterValue 
     */
    public constructor(filterByCurrentUserWithOnResponseParameterValue?: FilterByCurrentUserWithOnResponse | undefined) {
        this._additionalData = filterByCurrentUserWithOnResponseParameterValue?.additionalData ? filterByCurrentUserWithOnResponseParameterValue?.additionalData! : {};
        this._value = filterByCurrentUserWithOnResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstanceImpl>(createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleAssignmentScheduleInstanceImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof UnifiedRoleAssignmentScheduleInstanceImpl? element:new UnifiedRoleAssignmentScheduleInstanceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstanceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a UnifiedRoleAssignmentScheduleInstanceInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: UnifiedRoleAssignmentScheduleInstance[] | undefined) {
        if(value) {
            const valueArrValue: UnifiedRoleAssignmentScheduleInstanceImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof UnifiedRoleAssignmentScheduleInstanceImpl? element:new UnifiedRoleAssignmentScheduleInstanceImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
