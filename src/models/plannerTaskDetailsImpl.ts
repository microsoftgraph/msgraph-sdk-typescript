import {createPlannerChecklistItemsFromDiscriminatorValue} from './createPlannerChecklistItemsFromDiscriminatorValue';
import {createPlannerExternalReferencesFromDiscriminatorValue} from './createPlannerExternalReferencesFromDiscriminatorValue';
import {EntityImpl, PlannerChecklistItemsImpl, PlannerExternalReferencesImpl} from './index';
import {PlannerChecklistItems} from './plannerChecklistItems';
import {PlannerExternalReferences} from './plannerExternalReferences';
import {PlannerPreviewType} from './plannerPreviewType';
import {PlannerTaskDetails} from './plannerTaskDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class PlannerTaskDetailsImpl extends EntityImpl implements PlannerTaskDetails {
    /** The collection of checklist items on the task. */
    private _checklist?: PlannerChecklistItems | undefined;
    /** Description of the task. */
    private _description?: string | undefined;
    /** This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task. */
    private _previewType?: PlannerPreviewType | undefined;
    /** The collection of references on the task. */
    private _references?: PlannerExternalReferences | undefined;
    /**
     * Gets the checklist property value. The collection of checklist items on the task.
     * @returns a PlannerChecklistItemsInterface
     */
    public get checklist() {
        return this._checklist;
    };
    /**
     * Sets the checklist property value. The collection of checklist items on the task.
     * @param value Value to set for the checklist property.
     */
    public set checklist(value: PlannerChecklistItems | undefined) {
        if(value) {
            this._checklist = value instanceof PlannerChecklistItemsImpl? value : new PlannerChecklistItemsImpl(value);
        }
    };
    /**
     * Instantiates a new plannerTaskDetails and sets the default values.
     * @param plannerTaskDetailsParameterValue 
     */
    public constructor(plannerTaskDetailsParameterValue?: PlannerTaskDetails | undefined) {
        super(plannerTaskDetailsParameterValue);
        this._checklist = plannerTaskDetailsParameterValue?.checklist;
        this._description = plannerTaskDetailsParameterValue?.description;
        this._previewType = plannerTaskDetailsParameterValue?.previewType;
        this._references = plannerTaskDetailsParameterValue?.references;
    };
    /**
     * Gets the description property value. Description of the task.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the task.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "checklist": n => { this.checklist = n.getObjectValue<PlannerChecklistItemsImpl>(createPlannerChecklistItemsFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "previewType": n => { this.previewType = n.getEnumValue<PlannerPreviewType>(PlannerPreviewType); },
            "references": n => { this.references = n.getObjectValue<PlannerExternalReferencesImpl>(createPlannerExternalReferencesFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the previewType property value. This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.
     * @returns a plannerPreviewType
     */
    public get previewType() {
        return this._previewType;
    };
    /**
     * Sets the previewType property value. This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.
     * @param value Value to set for the previewType property.
     */
    public set previewType(value: PlannerPreviewType | undefined) {
        if(value) {
            this._previewType = value;
        }
    };
    /**
     * Gets the references property value. The collection of references on the task.
     * @returns a PlannerExternalReferencesInterface
     */
    public get references() {
        return this._references;
    };
    /**
     * Sets the references property value. The collection of references on the task.
     * @param value Value to set for the references property.
     */
    public set references(value: PlannerExternalReferences | undefined) {
        if(value) {
            this._references = value instanceof PlannerExternalReferencesImpl? value : new PlannerExternalReferencesImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.checklist){
            writer.writeObjectValue<PlannerChecklistItemsImpl>("checklist", (!this.checklist || this.checklist instanceof PlannerChecklistItemsImpl? this.checklist : new PlannerChecklistItemsImpl(this.checklist)));
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.previewType){
            writer.writeEnumValue<PlannerPreviewType>("previewType", this.previewType);
        }
        if(this.references){
            writer.writeObjectValue<PlannerExternalReferencesImpl>("references", (!this.references || this.references instanceof PlannerExternalReferencesImpl? this.references : new PlannerExternalReferencesImpl(this.references)));
        }
    };
}
