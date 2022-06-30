import {createOpenShiftItemFromDiscriminatorValue} from './createOpenShiftItemFromDiscriminatorValue';
import {ChangeTrackedEntityImpl, OpenShiftItemImpl} from './index';
import {OpenShift} from './openShift';
import {OpenShiftItem} from './openShiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenShiftImpl extends ChangeTrackedEntityImpl implements OpenShift {
    /** An unpublished open shift. */
    private _draftOpenShift?: OpenShiftItem | undefined;
    /** ID for the scheduling group that the open shift belongs to. */
    private _schedulingGroupId?: string | undefined;
    /** A published open shift. */
    private _sharedOpenShift?: OpenShiftItem | undefined;
    /**
     * Instantiates a new OpenShift and sets the default values.
     * @param openShiftParameterValue 
     */
    public constructor(openShiftParameterValue?: OpenShift | undefined) {
        super(openShiftParameterValue);
        this._draftOpenShift = openShiftParameterValue?.draftOpenShift;
        this._schedulingGroupId = openShiftParameterValue?.schedulingGroupId;
        this._sharedOpenShift = openShiftParameterValue?.sharedOpenShift;
    };
    /**
     * Gets the draftOpenShift property value. An unpublished open shift.
     * @returns a OpenShiftItemInterface
     */
    public get draftOpenShift() {
        return this._draftOpenShift;
    };
    /**
     * Sets the draftOpenShift property value. An unpublished open shift.
     * @param value Value to set for the draftOpenShift property.
     */
    public set draftOpenShift(value: OpenShiftItem | undefined) {
        if(value) {
            this._draftOpenShift = value instanceof OpenShiftItemImpl? value : new OpenShiftItemImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "draftOpenShift": n => { this.draftOpenShift = n.getObjectValue<OpenShiftItemImpl>(createOpenShiftItemFromDiscriminatorValue); },
            "schedulingGroupId": n => { this.schedulingGroupId = n.getStringValue(); },
            "sharedOpenShift": n => { this.sharedOpenShift = n.getObjectValue<OpenShiftItemImpl>(createOpenShiftItemFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the schedulingGroupId property value. ID for the scheduling group that the open shift belongs to.
     * @returns a string
     */
    public get schedulingGroupId() {
        return this._schedulingGroupId;
    };
    /**
     * Sets the schedulingGroupId property value. ID for the scheduling group that the open shift belongs to.
     * @param value Value to set for the schedulingGroupId property.
     */
    public set schedulingGroupId(value: string | undefined) {
        if(value) {
            this._schedulingGroupId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.draftOpenShift){
            writer.writeObjectValue<OpenShiftItemImpl>("draftOpenShift", (!this.draftOpenShift || this.draftOpenShift instanceof OpenShiftItemImpl? this.draftOpenShift : new OpenShiftItemImpl(this.draftOpenShift)));
        }
        if(this.schedulingGroupId){
            writer.writeStringValue("schedulingGroupId", this.schedulingGroupId);
        }
        if(this.sharedOpenShift){
            writer.writeObjectValue<OpenShiftItemImpl>("sharedOpenShift", (!this.sharedOpenShift || this.sharedOpenShift instanceof OpenShiftItemImpl? this.sharedOpenShift : new OpenShiftItemImpl(this.sharedOpenShift)));
        }
    };
    /**
     * Gets the sharedOpenShift property value. A published open shift.
     * @returns a OpenShiftItemInterface
     */
    public get sharedOpenShift() {
        return this._sharedOpenShift;
    };
    /**
     * Sets the sharedOpenShift property value. A published open shift.
     * @param value Value to set for the sharedOpenShift property.
     */
    public set sharedOpenShift(value: OpenShiftItem | undefined) {
        if(value) {
            this._sharedOpenShift = value instanceof OpenShiftItemImpl? value : new OpenShiftItemImpl(value);
        }
    };
}
