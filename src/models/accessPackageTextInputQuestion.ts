import {AccessPackageQuestion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageTextInputQuestion extends AccessPackageQuestion implements Parsable {
    /** Indicates whether the answer will be in single or multiple line format. */
    private _isSingleLineQuestion?: boolean | undefined;
    /** The regular expression pattern which any answer to this question must match. */
    private _regexPattern?: string | undefined;
    /**
     * Instantiates a new AccessPackageTextInputQuestion and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessPackageTextInputQuestion";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isSingleLineQuestion": n => { this.isSingleLineQuestion = n.getBooleanValue(); },
            "regexPattern": n => { this.regexPattern = n.getStringValue(); },
        };
    };
    /**
     * Gets the isSingleLineQuestion property value. Indicates whether the answer will be in single or multiple line format.
     * @returns a boolean
     */
    public get isSingleLineQuestion() {
        return this._isSingleLineQuestion;
    };
    /**
     * Sets the isSingleLineQuestion property value. Indicates whether the answer will be in single or multiple line format.
     * @param value Value to set for the isSingleLineQuestion property.
     */
    public set isSingleLineQuestion(value: boolean | undefined) {
        this._isSingleLineQuestion = value;
    };
    /**
     * Gets the regexPattern property value. The regular expression pattern which any answer to this question must match.
     * @returns a string
     */
    public get regexPattern() {
        return this._regexPattern;
    };
    /**
     * Sets the regexPattern property value. The regular expression pattern which any answer to this question must match.
     * @param value Value to set for the regexPattern property.
     */
    public set regexPattern(value: string | undefined) {
        this._regexPattern = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isSingleLineQuestion", this.isSingleLineQuestion);
        writer.writeStringValue("regexPattern", this.regexPattern);
    };
}
