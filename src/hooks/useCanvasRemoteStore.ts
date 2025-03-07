import { create } from 'zustand/react';

export type RemoteMode = 'view' | 'edit';
export type ShapeType = null | 'rect' | 'ellipse';

interface RemoteState {
  mode: RemoteMode;
  isAddingShape: boolean;
  shapeMode: ShapeType;
}

interface RemoteActions {
  setMode: (mode: RemoteMode) => void;
  setIsAddingShape: (isAdding: boolean) => void;
  setShapeMode: (shapeMode: ShapeType) => void;
}

/**
 * ### useCanvasRemoteStore
 *
 * #### 설명
 * > - 캔버스 리모트 컨트롤을 위한 전역 상태 관리 스토어
 * > - 캔버스의 모드(보기/편집), 도형 추가 상태, 선택된 도형 타입 등을 관리
 *
 * #### 상태
 * - `mode`: 현재 캔버스 모드 ('view' | 'edit') -> 새로운 도형 추가때마다 타입 변경예정
 * - `isAddingShape`: 도형 추가 중인지 여부
 * - `shapeMode`: 현재 선택된 도형 타입 (null | 'rect' | 'ellipse') -> 새로운 도형 추가때마다 타입 변경예정
 *
 * #### 액션
 * - `setMode`: 캔버스 모드 변경
 * - `setIsAddingShape`: 도형 추가 상태 변경
 * - `setShapeMode`: 도형 타입 변경
 *
 * #### 사용 예시
 * ```tsx
 * // 컴포넌트에서 스토어 사용하기
 * const { mode, shapeMode, isAddingShape, setMode, setShapeMode } = useCanvasRemoteStore();
 *
 * // 모드 변경하기
 * const handleModeToggle = () => {
 *   setMode(mode === 'view' ? 'edit' : 'view');
 * };
 *
 * // 도형 선택하기
 * const handleShapeSelect = (shape: ShapeType) => {
 *   setShapeMode(shape === shapeMode ? null : shape);
 *   setIsAddingShape(!!shape);
 * };
 *
 * // JSX에서 사용
 * return (
 *   <div>
 *     <button onClick={handleModeToggle}>
 *       {mode === 'view' ? '보기 모드' : '편집 모드'}
 *     </button>
 *     {mode === 'edit' && (
 *       <div>
 *         <button
 *           onClick={() => handleShapeSelect('rect')}
 *         >
 *           사각형
 *         </button>
 *         <button
 *           onClick={() => handleShapeSelect('ellipse')}
 *         >
 *           타원
 *         </button>
 *       </div>
 *     )}
 *   </div>
 * );
 * ```
 */
export const useCanvasRemoteStore = create<RemoteState & RemoteActions>((set) => ({
  mode: 'view',
  shapeMode: null,
  isAddingShape: false,
  setMode: (mode) => set({ mode }),
  setIsAddingShape: (isAddingShape) => set({ isAddingShape }),
  setShapeMode: (shapeMode) => set({ shapeMode }),
}));
