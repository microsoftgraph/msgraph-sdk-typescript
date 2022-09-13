import {createRequestScheduleFromDiscriminatorValue} from './createRequestScheduleFromDiscriminatorValue';
import {RequestSchedule, UnifiedRoleScheduleBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleEligibilitySchedule extends UnifiedRoleScheduleBase implements Parsable {
    /** How the role eligibility is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleEligibilitySchedule can be managed by the caller. Supports $filter (eq, ne). */
    private _memberType?: string | undefined;
    /** The period of the role eligibility. */
    private _scheduleInfo?: RequestSchedule | undefined;
    /**
     * Instantiates a new unifiedRoleEligibilitySchedule and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.unifiedRoleEligibilitySchedule";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "memberType": n => { this.memberType = n.getStringValue(); },
            "scheduleInfo": n => { this.scheduleInfo = n.getObjectValue<RequestSchedule>(createRequestScheduleFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the memberType property value. How the role eligibility is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleEligibilitySchedule can be managed by the caller. Supports $filter (eq, ne).
     * @returns a string
     */
    public get memberType() {
        return this._memberType;
    };
    /**
     * Sets the memberType property value. How the role eligibility is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleEligibilitySchedule can be managed by the caller. Supports $filter (eq, ne).
     * @param value Value to set for the memberType property.
     */
    public set memberType(value: string | undefined) {
        this._memberType = value;
    };
    /**
     * Gets the scheduleInfo property value. The period of the role eligibility.
     * @returns a requestSchedule
     */
    public get scheduleInfo() {
        return this._scheduleInfo;
    };
    /**
     * Sets the scheduleInfo property value. The period of the role eligibility.
     * @param value Value to set for the scheduleInfo property.
     */
    public set scheduleInfo(value: RequestSchedule | undefined) {
        this._scheduleInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("memberType", this.memberType);
        writer.writeObjectValue<RequestSchedule>("scheduleInfo", this.scheduleInfo);
    };
}
