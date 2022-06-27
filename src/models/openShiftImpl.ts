import {createOpenShiftItemFromDiscriminatorValue} from './createOpenShiftItemFromDiscriminatorValue';
import {ChangeTrackedEntityImpl, OpenShiftItemImpl} from './index';
import {OpenShift} from './openShift';
import {OpenShiftItem} from './openShiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenShiftImpl extends ChangeTrackedEntityImpl implements OpenShift {
    /** An unpublished open shift. */
    public draftOpenShift?: OpenShiftItem | undefined;
    /** ID for the scheduling group that the open shift belongs to. */
    public schedulingGroupId?: string | undefined;
    /** A published open shift. */
    public sharedOpenShift?: OpenShiftItem | undefined;
    /**
     * Instantiates a new OpenShift and sets the default values.
     * @param openShiftParameterValue 
     */
    public constructor(openShiftParameterValue?: OpenShift | undefined) {
        super(openShiftParameterValue);
        this.draftOpenShift = openShiftParameterValue?.draftOpenShift instanceof OpenShiftItemImpl? openShiftParameterValue?.draftOpenShift:new OpenShiftItemImpl(openShiftParameterValue?.draftOpenShift);
        this.schedulingGroupId = openShiftParameterValue?.schedulingGroupId;
        this.sharedOpenShift = openShiftParameterValue?.sharedOpenShift instanceof OpenShiftItemImpl? openShiftParameterValue?.sharedOpenShift:new OpenShiftItemImpl(openShiftParameterValue?.sharedOpenShift);
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.draftOpenShift){
            writer.writeObjectValue<OpenShiftItemImpl>("draftOpenShift", new OpenShiftItemImpl(this.draftOpenShift));
        }
        if(this.schedulingGroupId){
            writer.writeStringValue("schedulingGroupId", this.schedulingGroupId);
        }
        if(this.sharedOpenShift){
            writer.writeObjectValue<OpenShiftItemImpl>("sharedOpenShift", new OpenShiftItemImpl(this.sharedOpenShift));
        }
    };
}
