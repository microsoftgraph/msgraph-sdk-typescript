import {createUserFlowLanguagePageFromDiscriminatorValue} from './createUserFlowLanguagePageFromDiscriminatorValue';
import {EntityImpl, UserFlowLanguagePageImpl} from './index';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class UserFlowLanguageConfigurationImpl extends EntityImpl implements UserFlowLanguageConfiguration {
    /** Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification. */
    private _defaultPages?: UserFlowLanguagePage[] | undefined;
    /** The language name to display. This property is read-only. */
    private _displayName?: string | undefined;
    /** Indicates whether the language is enabled within the user flow. */
    private _isEnabled?: boolean | undefined;
    /** Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages). */
    private _overridesPages?: UserFlowLanguagePage[] | undefined;
    /**
     * Instantiates a new userFlowLanguageConfiguration and sets the default values.
     * @param userFlowLanguageConfigurationParameterValue 
     */
    public constructor(userFlowLanguageConfigurationParameterValue?: UserFlowLanguageConfiguration | undefined) {
        super(userFlowLanguageConfigurationParameterValue);
        this._defaultPages = userFlowLanguageConfigurationParameterValue?.defaultPages;
        this._displayName = userFlowLanguageConfigurationParameterValue?.displayName;
        this._isEnabled = userFlowLanguageConfigurationParameterValue?.isEnabled;
        this._overridesPages = userFlowLanguageConfigurationParameterValue?.overridesPages;
    };
    /**
     * Gets the defaultPages property value. Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.
     * @returns a UserFlowLanguagePageInterface
     */
    public get defaultPages() {
        return this._defaultPages;
    };
    /**
     * Sets the defaultPages property value. Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.
     * @param value Value to set for the defaultPages property.
     */
    public set defaultPages(value: UserFlowLanguagePage[] | undefined) {
        if(value) {
            const defaultPagesArrValue: UserFlowLanguagePageImpl[] = [];
            this.defaultPages?.forEach(element => {
                defaultPagesArrValue.push((element instanceof UserFlowLanguagePageImpl? element:new UserFlowLanguagePageImpl(element)));
            });
            this._defaultPages = defaultPagesArrValue;
        }
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
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "defaultPages": n => { this.defaultPages = n.getCollectionOfObjectValues<UserFlowLanguagePageImpl>(createUserFlowLanguagePageFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "overridesPages": n => { this.overridesPages = n.getCollectionOfObjectValues<UserFlowLanguagePageImpl>(createUserFlowLanguagePageFromDiscriminatorValue); },
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
        if(value) {
            this._isEnabled = value;
        }
    };
    /**
     * Gets the overridesPages property value. Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).
     * @returns a UserFlowLanguagePageInterface
     */
    public get overridesPages() {
        return this._overridesPages;
    };
    /**
     * Sets the overridesPages property value. Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).
     * @param value Value to set for the overridesPages property.
     */
    public set overridesPages(value: UserFlowLanguagePage[] | undefined) {
        if(value) {
            const overridesPagesArrValue: UserFlowLanguagePageImpl[] = [];
            this.overridesPages?.forEach(element => {
                overridesPagesArrValue.push((element instanceof UserFlowLanguagePageImpl? element:new UserFlowLanguagePageImpl(element)));
            });
            this._overridesPages = overridesPagesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.defaultPages && this.defaultPages.length != 0){        const defaultPagesArrValue: UserFlowLanguagePageImpl[] = [];
        this.defaultPages?.forEach(element => {
            defaultPagesArrValue.push((element instanceof UserFlowLanguagePageImpl? element:new UserFlowLanguagePageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UserFlowLanguagePageImpl>("defaultPages", defaultPagesArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isEnabled){
            writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
        if(this.overridesPages && this.overridesPages.length != 0){        const overridesPagesArrValue: UserFlowLanguagePageImpl[] = [];
        this.overridesPages?.forEach(element => {
            overridesPagesArrValue.push((element instanceof UserFlowLanguagePageImpl? element:new UserFlowLanguagePageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UserFlowLanguagePageImpl>("overridesPages", overridesPagesArrValue);
        }
    };
}
