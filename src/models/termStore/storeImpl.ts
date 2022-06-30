import {EntityImpl} from '../';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {Group} from './group';
import {GroupImpl, SetImpl} from './index';
import {Set} from './set';
import {Store} from './store';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class StoreImpl extends EntityImpl implements Store {
    /** Default language of the term store. */
    private _defaultLanguageTag?: string | undefined;
    /** Collection of all groups available in the term store. */
    private _groups?: Group[] | undefined;
    /** List of languages for the term store. */
    private _languageTags?: string[] | undefined;
    /** Collection of all sets available in the term store. */
    private _sets?: Set[] | undefined;
    /**
     * Instantiates a new store and sets the default values.
     * @param storeParameterValue 
     */
    public constructor(storeParameterValue?: Store | undefined) {
        super(storeParameterValue);
        this._defaultLanguageTag = storeParameterValue?.defaultLanguageTag;
        this._groups = storeParameterValue?.groups;
        this._languageTags = storeParameterValue?.languageTags;
        this._sets = storeParameterValue?.sets;
    };
    /**
     * Gets the defaultLanguageTag property value. Default language of the term store.
     * @returns a string
     */
    public get defaultLanguageTag() {
        return this._defaultLanguageTag;
    };
    /**
     * Sets the defaultLanguageTag property value. Default language of the term store.
     * @param value Value to set for the defaultLanguageTag property.
     */
    public set defaultLanguageTag(value: string | undefined) {
        if(value) {
            this._defaultLanguageTag = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "defaultLanguageTag": n => { this.defaultLanguageTag = n.getStringValue(); },
            "groups": n => { this.groups = n.getCollectionOfObjectValues<GroupImpl>(createGroupFromDiscriminatorValue); },
            "languageTags": n => { this.languageTags = n.getCollectionOfPrimitiveValues<string>(); },
            "sets": n => { this.sets = n.getCollectionOfObjectValues<SetImpl>(createSetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the groups property value. Collection of all groups available in the term store.
     * @returns a GroupInterface
     */
    public get groups() {
        return this._groups;
    };
    /**
     * Sets the groups property value. Collection of all groups available in the term store.
     * @param value Value to set for the groups property.
     */
    public set groups(value: Group[] | undefined) {
        if(value) {
            const groupsArrValue: GroupImpl[] = [];
            this.groups?.forEach(element => {
                groupsArrValue.push((element instanceof GroupImpl? element:new GroupImpl(element)));
            });
            this._groups = groupsArrValue;
        }
    };
    /**
     * Gets the languageTags property value. List of languages for the term store.
     * @returns a string
     */
    public get languageTags() {
        return this._languageTags;
    };
    /**
     * Sets the languageTags property value. List of languages for the term store.
     * @param value Value to set for the languageTags property.
     */
    public set languageTags(value: string[] | undefined) {
        if(value) {
            this._languageTags = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.defaultLanguageTag){
            writer.writeStringValue("defaultLanguageTag", this.defaultLanguageTag);
        }
        if(this.groups && this.groups.length != 0){        const groupsArrValue: GroupImpl[] = [];
        this.groups?.forEach(element => {
            groupsArrValue.push((element instanceof GroupImpl? element:new GroupImpl(element)));
        });
            writer.writeCollectionOfObjectValues<GroupImpl>("groups", groupsArrValue);
        }
        if(this.languageTags){
            writer.writeCollectionOfPrimitiveValues<string>("languageTags", this.languageTags);
        }
        if(this.sets && this.sets.length != 0){        const setsArrValue: SetImpl[] = [];
        this.sets?.forEach(element => {
            setsArrValue.push((element instanceof SetImpl? element:new SetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SetImpl>("sets", setsArrValue);
        }
    };
    /**
     * Gets the sets property value. Collection of all sets available in the term store.
     * @returns a SetInterface
     */
    public get sets() {
        return this._sets;
    };
    /**
     * Sets the sets property value. Collection of all sets available in the term store.
     * @param value Value to set for the sets property.
     */
    public set sets(value: Set[] | undefined) {
        if(value) {
            const setsArrValue: SetImpl[] = [];
            this.sets?.forEach(element => {
                setsArrValue.push((element instanceof SetImpl? element:new SetImpl(element)));
            });
            this._sets = setsArrValue;
        }
    };
}
