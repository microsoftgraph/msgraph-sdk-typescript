import {createPlannerChecklistItemsFromDiscriminatorValue} from './createPlannerChecklistItemsFromDiscriminatorValue';
import {createPlannerExternalReferencesFromDiscriminatorValue} from './createPlannerExternalReferencesFromDiscriminatorValue';
import {EntityImpl, PlannerChecklistItemsImpl, PlannerExternalReferencesImpl} from './index';
import {PlannerChecklistItems} from './plannerChecklistItems';
import {PlannerExternalReferences} from './plannerExternalReferences';
import {PlannerPreviewType} from './plannerPreviewType';
import {PlannerTaskDetails} from './plannerTaskDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class PlannerTaskDetailsImpl extends EntityImpl implements Parsable, PlannerTaskDetails {
    /** The collection of checklist items on the task. */
    public checklist?: PlannerChecklistItems | undefined;
    /** Description of the task. */
    public description?: string | undefined;
    /** This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task. */
    public previewType?: PlannerPreviewType | undefined;
    /** The collection of references on the task. */
    public references?: PlannerExternalReferences | undefined;
    /**
     * Instantiates a new plannerTaskDetails and sets the default values.
     * @param plannerTaskDetailsParameterValue 
     */
    public constructor(plannerTaskDetailsParameterValue?: PlannerTaskDetails | undefined) {
        super();
        this.checklist = plannerTaskDetailsParameterValue?.checklist ;
        this.description = plannerTaskDetailsParameterValue?.description ;
        this.previewType = plannerTaskDetailsParameterValue?.previewType ;
        this.references = plannerTaskDetailsParameterValue?.references ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.checklist){
        writer.writeObjectValue<PlannerChecklistItemsImpl>("checklist", new PlannerChecklistItemsImpl(this.checklist));
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.previewType){
        writer.writeEnumValue<PlannerPreviewType>("previewType", this.previewType);
        }
        if(this.references){
        writer.writeObjectValue<PlannerExternalReferencesImpl>("references", new PlannerExternalReferencesImpl(this.references));
        }
    };
}
