import {createAccessPackageAnswerChoiceFromDiscriminatorValue} from './createAccessPackageAnswerChoiceFromDiscriminatorValue';
import {AccessPackageAnswerChoice, AccessPackageQuestion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageMultipleChoiceQuestion extends AccessPackageQuestion implements Parsable {
    /** List of answer choices. */
    private _choices?: AccessPackageAnswerChoice[] | undefined;
    /** Indicates whether requestor can select multiple choices as their answer. */
    private _isMultipleSelectionAllowed?: boolean | undefined;
    /**
     * Gets the choices property value. List of answer choices.
     * @returns a accessPackageAnswerChoice
     */
    public get choices() {
        return this._choices;
    };
    /**
     * Sets the choices property value. List of answer choices.
     * @param value Value to set for the choices property.
     */
    public set choices(value: AccessPackageAnswerChoice[] | undefined) {
        this._choices = value;
    };
    /**
     * Instantiates a new AccessPackageMultipleChoiceQuestion and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessPackageMultipleChoiceQuestion";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "choices": n => { this.choices = n.getCollectionOfObjectValues<AccessPackageAnswerChoice>(createAccessPackageAnswerChoiceFromDiscriminatorValue); },
            "isMultipleSelectionAllowed": n => { this.isMultipleSelectionAllowed = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isMultipleSelectionAllowed property value. Indicates whether requestor can select multiple choices as their answer.
     * @returns a boolean
     */
    public get isMultipleSelectionAllowed() {
        return this._isMultipleSelectionAllowed;
    };
    /**
     * Sets the isMultipleSelectionAllowed property value. Indicates whether requestor can select multiple choices as their answer.
     * @param value Value to set for the isMultipleSelectionAllowed property.
     */
    public set isMultipleSelectionAllowed(value: boolean | undefined) {
        this._isMultipleSelectionAllowed = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessPackageAnswerChoice>("choices", this.choices);
        writer.writeBooleanValue("isMultipleSelectionAllowed", this.isMultipleSelectionAllowed);
    };
}
