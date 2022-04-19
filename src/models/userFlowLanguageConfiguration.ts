import {createUserFlowLanguagePageFromDiscriminatorValue} from './createUserFlowLanguagePageFromDiscriminatorValue';
import {Entity, UserFlowLanguagePage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserFlowLanguageConfiguration extends Entity implements Parsable {
    /** Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.  */
    private _defaultPages?: UserFlowLanguagePage[] | undefined;
    /** The language name to display. This property is read-only.  */
    private _displayName?: string | undefined;
    /** Indicates whether the language is enabled within the user flow.  */
    private _isEnabled?: boolean | undefined;
    /** Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).  */
    private _overridesPages?: UserFlowLanguagePage[] | undefined;
    /**
     * Instantiates a new userFlowLanguageConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defaultPages property value. Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.
     * @returns a userFlowLanguagePage
     */
    public get defaultPages() {
        return this._defaultPages;
    };
    /**
     * Sets the defaultPages property value. Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.
     * @param value Value to set for the defaultPages property.
     */
    public set defaultPages(value: UserFlowLanguagePage[] | undefined) {
        this._defaultPages = value;
    };
    /**
     * Gets the displayName property value. The language name to display. This property is read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The language name to display. This property is read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "defaultPages": n => { this.defaultPages = n.getCollectionOfObjectValues<UserFlowLanguagePage>(createUserFlowLanguagePageFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "overridesPages": n => { this.overridesPages = n.getCollectionOfObjectValues<UserFlowLanguagePage>(createUserFlowLanguagePageFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isEnabled property value. Indicates whether the language is enabled within the user flow.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Indicates whether the language is enabled within the user flow.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Gets the overridesPages property value. Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).
     * @returns a userFlowLanguagePage
     */
    public get overridesPages() {
        return this._overridesPages;
    };
    /**
     * Sets the overridesPages property value. Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).
     * @param value Value to set for the overridesPages property.
     */
    public set overridesPages(value: UserFlowLanguagePage[] | undefined) {
        this._overridesPages = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<UserFlowLanguagePage>("defaultPages", this.defaultPages);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeCollectionOfObjectValues<UserFlowLanguagePage>("overridesPages", this.overridesPages);
    };
}
